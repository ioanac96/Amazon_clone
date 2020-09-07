// I need this for tracking the basket

import React, {createContext, useContext, useReducer} from "react";

//This is the data layer
export const StateContext = createContext();

//Build a provider
export const StateProvider = ({ reducer, initialState, children}) => {
    const valueNeeded = useReducer(reducer, initialState);
    return (
        <StateContext.Provider value={valueNeeded} >
            {children}
        </StateContext.Provider>
    );
} 

//This is how we use it inside a component
export const useStateValue = () => useContext(StateContext); 
