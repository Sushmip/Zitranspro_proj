import React, { useState, useEffect } from 'react';
import styles from './UserForm.module.css';
import { useUserContext } from '../UsersContext/UsersContext';
import { useLocation } from 'react-router-dom'; // Import useLocation hook
import AdminSideMenu from '../../SideMenu/AdminSideMenu';

function CustomModal({ isOpen, closeModal, handleInvite , email}) {
  if (!isOpen) return null;

  return (
    
      <div className={styles.modalContainer}>
    
        <div className={styles.title}>
          <h1>{email}</h1>
        </div>
        <div className={styles.body}>
          <p>Invite User</p>
        </div>
        <div className={styles.footer}>
          <button onClick={closeModal} id={styles.cancelBtn}>
            Cancel
          </button>
          <button onClick={handleInvite}>Invite</button>
        </div>
      </div>
    
  );
}




const   UserForm = () => {
  const { addUserData ,updateUserData , userData,} = useUserContext(); 

  const location = useLocation(); // Get the current location
  const searchParams = new URLSearchParams(location.search);
  const editIndex = searchParams.get('index'); 
  const isUserForm=location.pathname.startsWith('/usersform')


  const [formData, setFormData] = useState({
    salutation: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    address: '',
    userName: '',
    email:'',
    password: ''
  });


  const [showModal, setShowModal]=useState(false);

  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const openModal=()=>{
    setShowModal(true);
  }

  const closeModal=()=>{
    setShowModal(false);
    setIsCheckboxChecked(false);
  }

  const handleInvite=()=>{
    window.alert('Invitation email sent successfuly');
    closeModal();
    setIsCheckboxChecked(true); 
  }

  const handleCheckboxChange = (event) => {
    const { checked } = event.target;
    if (!showModal && checked) {
      setIsCheckboxChecked(true);
      openModal();
    } else if (!checked) {
      setIsCheckboxChecked(false);
      closeModal();
    }
  };

  const [phoneNumberError, setPhoneNumberError] = useState('');

  useEffect(() => {
    let timer;
    if (phoneNumberError) {
      timer = setTimeout(() => {
        setPhoneNumberError('');
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [phoneNumberError]);

  useEffect(() => {
    if (editIndex !== null) {
      setFormData(userData[editIndex]);
    }
  }, [editIndex, userData]);

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;

    const inputValue = type === 'checkbox' ? checked : value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: inputValue,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let isValid = true;

    if ( !formData.firstName || !formData.lastName || !formData.address || !formData.userName || !formData.email) {
      window.alert('Error: All fields are required');
      isValid = false;
    }

    if (isValid) {
      if (formData.phoneNumber.length !== 10 || !/^\d+$/.test(formData.phoneNumber)) {
        setPhoneNumberError('Phone number must be exactly 10 digits and contain only numbers.');
        isValid = false;
      } else {
        setPhoneNumberError('');
      }
    }
    
    
    if (isValid) {
      console.log('Form submitted:', formData);
      if (editIndex !== null) {
        // Update existing user data
        updateUserData(formData, editIndex);
      } else {
        // Add new user data
        addUserData(formData);
      }
      window.alert('Data saved successfully!');
      setFormData({});
    }

  };

  return (
    <div className={styles.container}>
      {isUserForm && <AdminSideMenu/>}
      <div className={styles['formContainer']}>
        <h2 className={styles['formHeading']}>User Onboard Form</h2>
        <form onSubmit={handleSubmit}>
        <div className={styles['input-container']}>
          <label className={styles['labelContainer']}>
            Salutation:
            <select name="salutation"  value={formData.salutation} onChange={handleInputChange} >
              <option value="">Select</option>
              <option value="Mr">Mr</option>
              <option value="Miss">Miss</option>
              <option value="Other">Other</option>
            </select>
          </label>
        </div>
        <div className={styles['input-container']}>
          <label className={styles['labelContainer']}>
            First Name:
            <input className={styles['inputContainer']} type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} />
          </label>
        </div>
        <div className={styles['input-container']}>
        <label className={styles['labelContainer']}>
          Last Name:
          <input className={styles['inputContainer']} type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} />
        </label>
        </div>
        <div className={styles['input-container']}>
        <label className={styles['labelContainer']}>
          Phone Number:
          <input
            className={`${styles['inputContainer']} ${phoneNumberError ? styles['input-error'] : ''}`}
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
         />
            {phoneNumberError && <span className={styles["error-message"]}>{phoneNumberError}</span>}
        </label>
        </div>

        <div className={styles['input-container']}>
        <label className={styles['labelContainer']}>
          Address:
          <input className={styles['inputContainer']} type="text" name="address" value={formData.address} onChange={handleInputChange} />
        </label>
        </div>
        <div className={styles['input-container']}>
        <label className={styles['labelContainer']}>
          Username:
          <input className={styles['inputContainer']} type="text" name="userName" value={formData.userName} onChange={handleInputChange} />
        </label>
        </div>
        <div className={styles['input-container']}>
        <label className={styles['labelContainer']}>
          Email:
          <input className={styles['inputContainer']} type="text" name="email" value={formData.email} onChange={handleInputChange} />
        </label>
        </div>
        <div className={styles['inputContainer']}>
          <label className={styles['labelContainer']}>
          Invite Translator:
          <div className={styles['checkbox']}>
            <input 
              type="checkbox"
              name="inviteTranslator"
              checked={isCheckboxChecked}
              onChange={handleCheckboxChange}
              onClick={openModal}
              disabled={showModal}
            />
            </div>
          </label>
        </div>   

          
          <div className={styles['btnGroup']}>
            <button className={styles['submitBtn']} type="submit" onClick={handleSubmit} >
              Save
            </button>
          </div>
          
        </form>
        <CustomModal isOpen={showModal} closeModal={closeModal} handleInvite={handleInvite} email={formData.email} />

      </div>
    </div>
  );
};

export default UserForm;



