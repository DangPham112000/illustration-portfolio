import React, { createContext, useContext, useState } from 'react';

const NavBarContext = createContext();

export const NavBarProvider = ({ children }) => {
  const [navBarHeight, setNavBarHeight] = useState(0);

  const updateNavBarHeight = (height) => {
    setNavBarHeight(height);
  };

  return (
    <NavBarContext.Provider value={{ navBarHeight, updateNavBarHeight }}>
      {children}
    </NavBarContext.Provider>
  );
};

export const useNavBar = () => {
  return useContext(NavBarContext);
};