import React, { useState, useEffect } from 'react';
import styles from './TranslatorForm.module.css';
import { useTranslatorContext } from '../TranslatorContext/TranslatorContext';
import { useLocation } from 'react-router-dom'; 
import SideMenu from '../../SideMenu/SideMenu';


function CustomModal({ isOpen, closeModal, handleInvite , email}) {
  if (!isOpen) return null;

  return (
    
      <div className={styles.modalContainer}>
    
        <div className={styles.title}>
          <h1>{email}</h1>
        </div>
        <div className={styles.body}>
          <p>Invite Translator</p>
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


const AdditionalFields = ({ formData, handleInputChange, phoneNumberError ,openModal,isCheckboxChecked, handleCheckboxChange, showModal  }) => (
  <>
    {formData.translatortype === 'Freelancer' && (
      <>
          <div className={styles['inputContainer']}>
            <label className={styles['labelContainer']}>
              Salutation:
              <select name="salutation" value={formData.salutation} onChange={handleInputChange}>
                <option value="">Select</option>
                <option value="Mr">Mr</option>
                <option value="Miss">Miss</option>
                <option value="other">other</option>

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
          <input className={styles['inputContainer']} type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} phoneNumberError />
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
      </>
  )}

    {formData.translatortype === 'Organization' && (
      <>
        <div className={styles['input-container']}>
          <label className={styles['labelContainer']}>
            Organization Name:
            <input className={styles['inputContainer']} type="text" name="organizationName" value={formData.organizationName} onChange={handleInputChange} />
          </label>
          </div>
          <div className={styles['input-container']}>
          <label className={styles['labelContainer']}>
            Organization Address:
            <input className={styles['inputContainer']} type="text" name="organizationAddress" value={formData.organizatioAddress} onChange={handleInputChange} />
          </label>
          </div>
          <div className={styles['input-container']}>
          <label className={styles['labelContainer']}>
            Organization email:
            <input className={styles['inputContainer']} type="text" name="organizationEmail" value={formData.organizationEmail} onChange={handleInputChange} />
          </label>
          </div>
          <div className={styles['input-container']}>
          <label className={styles['labelContainer']}>
            Contact Person Name:
            <input className={styles['inputContainer']} type="text" name="contactPersonName" value={formData.contactPersonName} onChange={handleInputChange} />
          </label>
          </div>
          <div className={styles['input-container']}>
          <label className={styles['labelContainer']}>
            Contact Person Phone Number:
            <input className={styles['inputContainer']} type="text" name="contactPersonPhNum" value={formData.contactPersonPhNum} onChange={handleInputChange} />
          </label>
          </div>
          <div className={styles['inputContainer']}>
          <label className={styles['labelContainer']}>
          Invite Translator:
          <div className={styles['checkbox']}>
            <input 
              type="checkbox"
              name="inviteTranslator"
              checked={formData.inviteTranslator}
              onChange={handleInputChange}
              onClick={openModal}
              disabled={showModal}
            />
            </div>
          </label>
        </div>     
      </>
    )}
  </>
);

const TranslatorForm = () => {
  const { updateTranslatorData,addTranslatorData,translatorData } = useTranslatorContext();

  const location = useLocation(); // Get the current location
  const searchParams = new URLSearchParams(location.search);
  const editIndex = searchParams.get('index'); // Get the edit index from query parameter

  const isTranslatorForm=location.pathname.startsWith('/translatorform')

  const [formData, setFormData] = useState({
    translatortype: '',
    salutation: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    address: '',
    userName: '',
    email: '',
    organizationName: '',
    organizationAddress: '',
    organizationEmail: '',
    contactPersonName: '',
    contactPersonPhNum: '',
    inviteTranslator:false,
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

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;

    const inputValue = type === 'checkbox' ? checked : value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: inputValue,
    }));
  };

  useEffect(() => {
    if (editIndex !== null) {
      const editedData = translatorData[editIndex];
      setFormData(editedData);
      setIsCheckboxChecked(editedData.inviteTranslator);
    }
  }, [editIndex, translatorData]);

  const handleSubmit = (event) => {
    event.preventDefault();
    let isValid = true;
  
    if (isValid) {
      console.log('Form submitted:', formData);
  
      if (formData.translatortype === 'Freelancer') {
        const freelancerData = {
          salutation: formData.salutation,
          firstName: formData.firstName,
          lastName: formData.lastName,
          phoneNumber: formData.phoneNumber,
          address: formData.address,
          userName: formData.userName,
          email: formData.email,
          translatortype: formData.translatortype,
        };
  
        if (editIndex !== null) {
          // Update existing freelancer data
          updateTranslatorData(freelancerData, editIndex);
        } else {
          // Add new freelancer data
          addTranslatorData(freelancerData);
        }
      } else if (formData.translatortype === 'Organization') {
        const organizationData = {
          organizationName: formData.organizationName,
          organizationAddress: formData.organizationAddress,
          organizationEmail: formData.organizationEmail,
          contactPersonName: formData.contactPersonName,
          contactPersonPhNum: formData.contactPersonPhNum,
          translatortype: formData.translatortype,
        };
  
        if (editIndex !== null) {
          // Update existing organization data
          updateTranslatorData(organizationData, editIndex);
        } else {
          // Add new organization data
          addTranslatorData(organizationData);
        }
      }
  
      window.alert('Data saved successfully!');
      setFormData({});
      setIsCheckboxChecked(false);

    }
  };
  
  
  return (
    <div className={styles.container}>
      {isTranslatorForm && <SideMenu/>} 
      <div className={styles['formContainer']}>
        <h2 className={styles['formHeading']}>Translator Onboard Form</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles['inputContainer']}>
            <label className={styles['labelContainer']}>
              Translator type:
              <select name="translatortype" value={formData.translatortype} onChange={handleInputChange}>
                <option value="">Select</option>
                <option value="Freelancer">Freelancer</option>
                <option value="Organization">Organization</option>
              </select>
            </label>
          </div>

          <AdditionalFields formData={formData} 
          handleInputChange={handleInputChange}
           phoneNumberError={phoneNumberError} 
           openModal={openModal}
            isCheckboxChecked={isCheckboxChecked}
            handleCheckboxChange={handleCheckboxChange}
            showModal={showModal} />
          <div className={styles['btnGroup']}>
            <button className={styles['submitBtn']} type="submit">
              Save
            </button>
          </div>
          
        </form>
        <CustomModal isOpen={showModal} closeModal={closeModal} handleInvite={handleInvite} email={formData.email} />

      </div>
    </div>
  );
};

export default TranslatorForm;
