"use client"
import { createContext, useState, useEffect } from "react";
import { getUser } from "../util/localstorage";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userInfo = JSON.parse(getUser())
    if (userInfo) setUser(userInfo);
  }, []);

  return (
    <UserContext.Provider value={{user}}>{children}</UserContext.Provider>
  );
};
