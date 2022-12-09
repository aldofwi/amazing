import React, { createContext, useContext, useReducer } from "react"

// Prepare the DATA LAYER
export const StateContext = createContext();

// Wrap our App & Provide the DATA LAYER
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Pull informations from the DATA LAYER
export const useStateValue = () => useContext(StateContext);

// InitialState => The state at the beginning
// Reducer => How whe manipulates the data
