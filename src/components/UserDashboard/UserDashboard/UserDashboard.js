import React from 'react';
import { useRequest } from '../CreateRequest/RequestContext';
import SideMenu from './SideMenu'; // Import the SideMenu component
import Navbar from '../UserHeader/Navbar';
function UserDashboard() {
  const { requestList } = useRequest();

  return (
    <div>
         <Navbar/>
      <SideMenu />
      {/* Include the SideMenu component */}
      <div className="dashboard-container">
        
        <ul>
          {requestList.map((requestData, index) => (
            <li key={index}>
              {requestData.documentName && (
                <div>
                  Document Name: {requestData.documentName}
                </div>
              )}
              {requestData.documentDescription && (
                <div>
                  Document Description: {requestData.documentDescription}
                </div>
              )}
              {requestData.selectedDocumentLanguage && (
                <div>
                  Document Language: {requestData.selectedDocumentLanguage}
                </div>
              )}
              {requestData.selectedConversionLanguage && (
                <div>
                  Conversion Language: {requestData.selectedConversionLanguage}
                </div>
              )}
              {requestData.documentname && (
                <div>
                  Uploaded Document: {requestData.documentname}
                </div>
              )}
              {requestData.translatorOrOrganization && (
                <div>
                  Translator Or Organization: {requestData.translatorOrOrganization}
                </div>
              )}
              {requestData.starRatings && (
                <div>
                  Star ratings: {requestData.starRatings}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UserDashboard;
