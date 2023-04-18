import React, { createContext, useReducer, useState, useEffect } from "react";
import AppReducer from "./AppReducer.js";

// Initial state
const initialState = {
  transactions: [],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Transaction state
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  // Actions
  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
        text,
        setText,
        amount,
        setAmount,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
