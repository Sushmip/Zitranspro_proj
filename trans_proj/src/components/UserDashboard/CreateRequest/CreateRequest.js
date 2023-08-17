import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRequest } from './RequestContext';
import './CreateRequest.css';
import Navbar from '../UserHeader/Navbar';

function CreateRequest() {
  const { addRequestData } = useRequest();
  const [documentName, setDocumentName] = useState('');
  const [documentDescription, setDocumentDescription] = useState('');
  const [selectedDocumentLanguage, setSelectedDocumentLanguage] = useState('');
  const [selectedConversionLanguage, setSelectedConversionLanguage] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const navigate = useNavigate();

  const handleDocumentNameChange = (e) => {
    setDocumentName(e.target.value);
    validateForm();
  };

  const handleDocumentDescriptionChange = (e) => {
    setDocumentDescription(e.target.value);
    validateForm();
  };

  const handleDocumentLanguageChange = (e) => {
    setSelectedDocumentLanguage(e.target.value);
    validateForm();
  };

  const handleConversionLanguageChange = (e) => {
    setSelectedConversionLanguage(e.target.value);
    validateForm();
  };

  const validateForm = () => {
    setIsFormValid(
      documentName.trim() !== '' &&
      documentDescription.trim() !== '' &&
      selectedDocumentLanguage !== '' &&
      selectedConversionLanguage !== ''
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      const requestData = {
        documentName,
        documentDescription,
        selectedDocumentLanguage,
        selectedConversionLanguage,
        source: 'CreateRequest', // Indicate the source
      };
      addRequestData(requestData, 'CreateRequest'); // Add the form data to the context

      // Reset the form fields
      setDocumentName('');
      setDocumentDescription('');
      setSelectedDocumentLanguage('');
      setSelectedConversionLanguage('');
      setIsFormValid(false);

      // Show a success message
      alert('Request created successfully!');

      // Navigate to the Dashboard page
      navigate('/translation');
    }
  };



  return (
    <div><Navbar/>
    <div className="create-request-container">
      <div className="form-container">
        <h1>Create Request</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="documentName">Document Name: <span className="required">*</span></label>
            <input
              className="form-input"
              type="text"
              id="documentName"
              value={documentName}
              onChange={handleDocumentNameChange}
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="documentDescription">Document Description: <span className="required">*</span></label>
            <textarea
              className="form-textarea"
              id="documentDescription"
              value={documentDescription}
              onChange={handleDocumentDescriptionChange}
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="documentLanguage">Document Language: <span className="required">*</span></label>
            <select
              className="form-select"
              id="documentLanguage"
              value={selectedDocumentLanguage}
              onChange={handleDocumentLanguageChange}
            >
              <option value="">Select Document Language</option>
              <option value="kannada">Kannada</option>
              <option value="tamil">Tamil</option>
              <option value="malayalam">Malayam</option>
              <option value="french">French</option>
              <option value="telugu">Telugu</option>
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="conversionLanguage">Conversion Language: <span className="required">*</span></label>
            <select
              className="form-select"
              id="conversionLanguage"
              value={selectedConversionLanguage}
              onChange={handleConversionLanguageChange}
            >
              <option value="">Select Conversion Language</option>
              <option value="kannada">Kannada</option>
              <option value="tamil">Tamil</option>
              <option value="malayalam">Malayam</option>
              <option value="french">French</option>
              <option value="telugu">Telugu</option>
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
            </select>
          </div>
          <button className="form-submit" type="submit" disabled={!isFormValid}>
            Submit
          </button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default CreateRequest;
