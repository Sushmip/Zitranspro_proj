import React, { createContext, useContext, useState } from 'react';
const RequestContext = createContext();

export function useRequest() {
  return useContext(RequestContext);
}

export function RequestProvider({ children }) {
  const [requestList, setRequestList] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]); // New state for uploaded files

  const addRequestData = (data) => {
    setRequestList((prevList) => [...prevList, data]);
  };

  const addUploadedFile = (file) => {
    setUploadedFiles((prevFiles) => [...prevFiles, file]);
  };

  // Other functions...

  const contextValue = {
    requestList,
    uploadedFiles,
    addRequestData,
    addUploadedFile,
    // Other values...
  };

  return (
    <RequestContext.Provider value={contextValue}>
      {children}
    </RequestContext.Provider>
  );
}

export default RequestContext;