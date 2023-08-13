import { type } from "@testing-library/user-event/dist/type";
import { createContext, useState, useReducer } from "react";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

const INITAL_STATE = {
  currentUser: null
}

const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_CURRENT_USER":
      return { ...state, currentUser: payload };
    default:
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
};

export const UserProvider = ({ children }) => {

  const [state, dispatch] = useReducer(userReducer, INITAL_STATE);
  const { currentUser } = state;
  const setCurrentUser = user => dispatch({type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user});
  

  const value = { currentUser, setCurrentUser };
  
  return (
    <UserContext.Provider value={value}> {children} </UserContext.Provider>
  );
};
