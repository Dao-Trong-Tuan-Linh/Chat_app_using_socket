import { createContext, useContext, useReducer } from "react";
import { decodeToken } from "../util/localstorage";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
  
  const { id } = decodeToken();

  const INITIAL_STATE = {
    chatId: null,
    user: {},
  };

  const chatReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_USER":
        return {
          user: action.payload,
          chatId:
            id > action.payload._id
              ? id + action.payload._id
              : action.payload._id + id,
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);
  return (
    <ChatContext.Provider value={{ data: state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};
