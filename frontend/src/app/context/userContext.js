"use client"
import { createContext, useState, useEffect } from "react";
import { getUser } from "../util/localstorage";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const initialUser = JSON.parse(getUser()) ?? null;
  const [user, setCurrentUser] = useState(initialUser);

  return (
    <UserContext.Provider value={{user,setCurrentUser}}>{children}</UserContext.Provider>
  );
};
