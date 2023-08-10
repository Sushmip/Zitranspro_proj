import React, { useState, createContext, useContext } from 'react';

const RequestContext = createContext();

export const useRequest = () => {
  return useContext(RequestContext);
};

const RequestProvider = ({ children }) => {
  const [requestList, setRequestList] = useState([]);

  const addRequestData = (requestData) => {
    setRequestList([...requestList, requestData]);
  };

  const requestContextValue = {
    requestList,
    addRequestData,
  };

  return (
    <RequestContext.Provider value={requestContextValue}>
      {children}
    </RequestContext.Provider>
  );
};

export default RequestProvider;
