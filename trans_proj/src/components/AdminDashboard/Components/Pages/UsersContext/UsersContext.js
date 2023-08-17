import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);

  const addUserData = (data) => {
    setUserData((prevData) => [...prevData, data]);
  };

  const updateUserData = (data, index) => {
    setUserData((prevData) => {
      const updatedData = [...prevData];
      updatedData[index] = data;
      return updatedData;
    });
  };

  const deleteUserData = (index) => {
    setUserData((prevData) => prevData.filter((data, i) => i !== index));
  };

  return (
    <UserContext.Provider value={{ userData, addUserData ,updateUserData,deleteUserData ,}}>
      {children}
    </UserContext.Provider>
  );
};
