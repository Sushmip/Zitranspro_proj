import { createContext, useContext, useState } from 'react';

const TranslatorContext = createContext();

export const useTranslatorContext = () => {
  return useContext(TranslatorContext);
};

export const TranslatorProvider = ({ children }) => {
  const [translatorData, setTranslatorData] = useState([]);

  const addTranslatorData = (data) => {
    setTranslatorData((prevData) => [...prevData, data]);
  };

  const updateTranslatorData = (data, index) => {
    setTranslatorData((prevData) => {
      const updatedData = [...prevData];
      updatedData[index] = data;
      return updatedData;
    });
  };

  const deleteTranslatorData = (index) => {
    setTranslatorData((prevData) => prevData.filter((data, i) => i !== index));
  };

  return (
    <TranslatorContext.Provider value={{ translatorData,updateTranslatorData, addTranslatorData ,deleteTranslatorData }}>
      {children}
    </TranslatorContext.Provider>
  );
};
