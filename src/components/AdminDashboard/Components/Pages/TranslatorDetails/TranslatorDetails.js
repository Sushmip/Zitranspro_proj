import React, { useState } from 'react';
import { useTranslatorContext } from '../TranslatorContext/TranslatorContext';
import { Tabs } from 'antd';
import './TranslatorDetails.css'; 
import { Link } from 'react-router-dom';


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


const { TabPane } = Tabs;

const TranslatorDetails = () => {
  const { translatorData, deleteTranslatorData } = useTranslatorContext();

  const handleDelete = (index) => {
    deleteTranslatorData(index);
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

  const [activeTab, setActiveTab] = useState('freelancer'); // Default to 'freelancer' tab

  const handleTabChange = (key) => {
    setActiveTab(key);
  };

  const FreelancerData = translatorData.filter((data) => data.translatortype === 'Freelancer');
  const OrganizationData = translatorData.filter((data) => data.translatortype === 'Organization');

  return (
    <div>
      <h2 style={{ fontSize: "24px", fontFamily: "serif", fontWeight: "bold" , textAlign:"center"}}>Translator Details</h2>
      <Tabs activeKey={activeTab} onChange={handleTabChange} className='tabs-container'>
        <TabPane  tab="Freelancer Info" key="freelancer">
          <div className='table-container'>
            <table className="translator-details-table">
              <thead>
                <tr>
                  <th>Salutation</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Phone Number</th>
                  <th>Address</th>
                  <th>Translator type</th>
                  <th>UserName</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
                <tbody>
                  {FreelancerData.map((data, index) => (
                    <tr key={index}>
                    <td>{data.salutation}</td>
                    <td>{data.firstName}</td>
                    <td>{data.lastName}</td>
                    <td>{data.phoneNumber}</td>
                    <td>{data.address}</td>
                    <td>{data.translatortype}</td>
                    <td>{data.userName}</td>
                    <td>{data.email}</td>
                    <td className="dropdown-td" style={{border:'1px solid #171717'}}>
                      <div className="dropdown">
                      <div className="dropbtn"  >Delete</div>
                        <div className="dropdown-content">
                          <a href="#" onClick={() => handleDelete(index)}>Delete</a>
                          <Link to={`/translatorform?index=${index}`}>Edit</Link>
                          <a href='#' onClick={() => openModal(data.email)}>Invite </a>       
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
        </TabPane>
        <TabPane tab="Organization Info" key="organization">
          <div className='table-container'>
            <table className="translator-details-table">
              <thead>
                <tr>
                  <th>Organization Name</th>
                  <th>Organization Address</th>
                  <th>Organization Email</th>
                  <th>Contact Person Name</th>
                  <th>Contact Person Phone Number</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {OrganizationData.map((data, index) => (
                  <tr key={index}>
                    <td>{data.organizationName}</td>
                    <td>{data.organizationAddress}</td>
                    <td>{data.organizationEmail}</td>
                    <td>{data.contactPersonName}</td>
                    <td>{data.contactPersonPhNum}</td>
                    <td className="dropdown-td" style={{border:'1px solid #171717'}}>
                      <div className="dropdown">
                      <div className="dropbtn">Delete</div>
                        <div className="dropdown-content">
                          <a href="#" onClick={() => handleDelete(index)}>Delete</a>
                          <Link to={`/translatorform?index=${index}`}>Edit</Link>
                          <a href='#' onClick={() => openModal(data.organizationEmail)}>Invite </a>       
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
        </TabPane>
      </Tabs>
    </div>
  );
};

export default TranslatorDetails;
