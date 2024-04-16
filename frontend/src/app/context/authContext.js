"use client"
import { createContext, useState, useEffect } from "react";
import { getAuthUser } from "../util/localstorage";

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    if (getAuthUser()) setAuthUser(getAuthUser());
  }, []);

  return (
    <AuthContext.Provider value={authUser}>{children}</AuthContext.Provider>
  );
};
