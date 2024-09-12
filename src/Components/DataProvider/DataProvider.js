import React from "react";
import { createContext, useReducer } from "react";
export const DataContext = createContext();

export default function Dataprovider({ children, reducer, initialState }) {
  return (
    <div>
      <DataContext.Provider value={useReducer(reducer, initialState)}>
        {children}
      </DataContext.Provider>
    </div>
  );
}
