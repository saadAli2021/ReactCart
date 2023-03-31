import React, { useContext, useState, useReducer, useEffect } from "react";
import { DEFAULT_STATE, reducer, ACTION_TYPES } from "./PostReducer";
const AppContext = React.createContext();
const url = "https://course-api.com/react-useReducer-cart-project";

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, DEFAULT_STATE);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    dispatch({ type: ACTION_TYPES.setTotals });
  }, [state.cart]);

  const fetchData = async () => {
    dispatch({ type: ACTION_TYPES.Loading, payload: true });
    const response = await fetch(url);
    const result = await response.json();

    dispatch({ type: ACTION_TYPES.setCartData, payload: result });
  };

  const increaseAmount = (id) => {
    dispatch({ type: ACTION_TYPES.increase, payload: id });
  };

  const decreaseAmount = (id) => {
    dispatch({ type: ACTION_TYPES.decrease, payload: id });
  };
  const remove = (id) => {
    dispatch({ type: ACTION_TYPES.delete, payload: id });
  };
  const cartTotal = () => {};
  return (
    <AppContext.Provider
      value={{ dispatch, increaseAmount, decreaseAmount, remove, ...state }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const UseGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
