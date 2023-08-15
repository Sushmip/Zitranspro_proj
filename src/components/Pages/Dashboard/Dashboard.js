// Dashboard.js
import React from 'react';
import { useRequest } from '../../contexts/RequestContext';
import './Dashboard.css';
function Dashboard() {
  const { requestList } = useRequest();

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <ul>
        {requestList.map((requestData, index) => (
          <li key={index} className="request-card">
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
                Document Uploaded: {requestData.documentname}
              </div>
            )}
            {requestData.translatorOrOrganization && (
              <div>
                Translator Or Organization Name: {requestData.translatorOrOrganization}
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
  );
}

export default Dashboard;
