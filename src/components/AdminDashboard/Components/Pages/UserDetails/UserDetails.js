import React from 'react';
import { useUserContext } from '../UsersContext/UsersContext';
import './UserDetails.css'; 
import { Link } from 'react-router-dom';
import { useState } from 'react';



function InviteModal({ isOpen, closeModal, handleInvite, email }) {
  if (!isOpen) return null;

  return (
    <div className='modalContainer'>
      <div className='title'>
        <h1>{email}</h1>
      </div>
      <div className='body'>
        <p>Invite User</p>
      </div>
      <div className='footer'>
        <button onClick={closeModal} id='cancelBtn'>
          Cancel
        </button>
        <button onClick={handleInvite}>Invite</button>
      </div>
    </div>
  );
}




const UserDetails = () => {
  const { userData, deleteUserData ,  } = useUserContext();

  const handleDelete = (index) => {
    deleteUserData(index);
  };

  const [showModal, setShowModal] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState('');

  const openModal = (email) => {
    setSelectedEmail(email);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedEmail('');
  };

  const handleInvite = () => {
    // Perform invite action here
    window.alert('Invitation email sent successfully');
    closeModal();
  };

  return (
    <div>
      <h2 style={{ fontSize: "24px", fontFamily: "serif", fontWeight: "bold" , textAlign:"center"}}>User Details</h2>
      <div className='table-container'>
      <table className="user-details-table">
        <thead>
          <tr>
            <th>Salutation</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>Username</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((data, index) => (
            <tr key={index}>
              <td>{data.salutation}</td>
              <td>{data.firstName}</td>
              <td>{data.lastName}</td>
              <td>{data.phoneNumber}</td>
              <td>{data.address}</td>
              <td>{data.userName}</td>
              <td>{data.email}</td>
              <td className="dropdown-td" style={{border:'1px solid #171717'}}>
                <div className="dropdown">
                <div className="dropbtn"  >Delete</div>
                  <div className="dropdown-content">
                    <a href="#" onClick={() => handleDelete(index)}>Delete</a>
                    <Link to={`/usersform?index=${index}`}>Edit</Link>
                    <a href='#' onClick={() => openModal(data.email)}>
                  Invite
                </a>                 
                 </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <InviteModal
        isOpen={showModal}
        closeModal={closeModal}
        handleInvite={handleInvite}
        email={selectedEmail}
      />
    </div>
  );
};

export default UserDetails;
