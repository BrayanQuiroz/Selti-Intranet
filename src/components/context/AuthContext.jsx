// context/AuthContext.js
import React, { useState, useEffect } from 'react';

export const AuthContext = React.createContext({
  usernameid: null,
  nameuser: null,
  roleName: null,
  setAuthData: () => {},
});

export const AuthProvider = ({ children }) => {
  const [authData, setAuthDataState] = useState({
    usernameid: null,
    nameuser: null,
    roleName: null,
  });

  // Al iniciar, carga los datos del LocalStorage si existen
  useEffect(() => {
   const storedAuthData = localStorage.getItem('authData');
    if (storedAuthData) {
      setAuthDataState(JSON.parse(storedAuthData));
    }
  }, []);

  // Cuando 'authData' cambia, guarda los nuevos datos en LocalStorage
  useEffect(() => {
    localStorage.setItem('authData', JSON.stringify(authData));
  }, [authData]);

  // Método para actualizar authData y conservar los datos existentes
  const setAuthData = (newAuthData) => {
    setAuthDataState((prevAuthData) => ({
      ...prevAuthData,
      ...newAuthData,
    }));
  };

  return (
    <AuthContext.Provider value={{ ...authData, setAuthData }}>
      {children}
    </AuthContext.Provider>
  );
};
