import React, { useReducer, useContext, createContext } from "react";

//! Prepare the data layer
export const stateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <stateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </stateContext.Provider>
  );
};

//! Hook which allows us to pull information from the data layer
export const useStateValue = () => useContext(stateContext);
