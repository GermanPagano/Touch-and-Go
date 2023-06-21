import React, { createContext, useState } from "react";

export const ProfilesCardsContext = createContext();

export const ProfilesCardsContextProvider = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastDirection, setLastDirection] = useState(null);

  return (
    <ProfilesCardsContext.Provider
      value={{ currentIndex, setCurrentIndex, lastDirection, setLastDirection }}
    >
      {children}
    </ProfilesCardsContext.Provider>
  );
};
