import React, { useState } from 'react';
import './Translation.css';
import p1 from "../../../images/p1.jpg";
import p3 from "../../../images/p3.jpg";
import p4 from "../../../images/p4.jpg";
import p5 from "../../../images/p5.png";
import p2 from "../../../images/p2.png";
import p6 from "../../../images/p6.png";
import p7 from "../../../images/p7.png";
import p8 from "../../../images/p8.jpg";
import p9 from "../../../images/p9.jpg";
import p10 from "../../../images/p10.png";
import Navbar from '../UserHeader/Navbar';
import { useNavigate } from 'react-router-dom';
import { useRequest } from '../CreateRequest/RequestContext';
const translatorsData = [
  {
    id: 1,
    name: 'Ankita',
    profilePic: p1,
    starRatings: 4.8,
  },
  {
    id: 2,
    name: 'Anvit',
    profilePic: p2,
    starRatings: 4.5,
  },
  {
    id: 3,
    name: 'Akash',
    profilePic: p3,
    starRatings: 3.5,
  },
  {
    id: 4,
    name: 'Ananya',
    profilePic: p4,
    starRatings: 2.5,
  },
  {
    id: 5,
    name: 'Ajith',
    profilePic: p5,
    starRatings: 4.9,
  },
  // Add more translators...
];

const organizationsData = [
  {
    id: 1,
    name: 'Organization 1',
    profilePic: p6,
    starRatings: 4.5,
  },
  {
    id: 2,
    name: 'Organization 2',
    profilePic: p7,
    starRatings: 3.0,
  },
  {
    id: 3,
    name: 'Organization 3',
    profilePic: p8,
    starRatings: 3.2,
  },
  {
    id: 4,
    name: 'Organization 4',
    profilePic: p9,
    starRatings: 4.0,
  },
  {
    id: 5,
    name: 'Organization 5',
    profilePic: p10,
    starRatings: 3.9,
  },
  // ... (other organization data)
];


function Profile({ data }) {
  const navigate = useNavigate();
  const [isUploadFormVisible, setIsUploadFormVisible] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
 
  const { addRequestData, addUploadedFile } = useRequest();

  const handleUploadClick = () => {
    setIsUploadFormVisible(true);
  };

  const handleFileSelection = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUploadFormClose = () => {
    setIsUploadFormVisible(false);
  };

  const handleUploadConfirm = () => {
    if (selectedFile) {
      const uploadedData = {
        documentname: selectedFile.name,
        translatorOrOrganization: data.name, // Include the translator/organization name
        starRatings: data.starRatings, // Include the star ratings
      };

      addRequestData(uploadedData);
      addUploadedFile(selectedFile);
      setSelectedFile(null);
      setIsUploadFormVisible(false);

      navigate('/User-dashboard');
    }
  };

  return (
    <li className="profile-item">
      <img src={data.profilePic} alt={data.name} />
      <div>
        <p>{data.name}</p>
        <p>Star Ratings: {data.starRatings}</p>
      </div>
      <button onClick={handleUploadClick}>Upload Document</button>
      {isUploadFormVisible && (
        <div className="upload-form-overlay">
          <div className="upload-form-container">
            <span className="close-button" onClick={handleUploadFormClose}>
              &times;
            </span>
            <h2>Upload Document</h2>
            <input type="file" onChange={handleFileSelection} />
            <button onClick={handleUploadConfirm}>Upload</button>
          </div>
        </div>
      )}
    </li>
  );
}

function Translation() {
  return (
    <div><Navbar/>
    <div className="translation-container">
      <div className="translators-list">
        <h2>Select a Translator</h2>
        <ul>
          {translatorsData.map((translator) => (
            <Profile key={translator.id} data={translator} />
          ))}
        </ul>
      </div>

      <div className="organizations-list">
        <h2>Select an Organization</h2>
        <ul>
          {organizationsData.map((organization) => (
            <Profile key={organization.id} data={organization} />
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
}

export default Translation;