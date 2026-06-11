"use client";

import { Provider } from "react-redux";
import { store } from "../redux/store";
import { Toaster } from "react-hot-toast";

function ReduxProvider({ children }) {
  return (
    <Provider store={store}>
      {children}
      <Toaster />
    </Provider>
  );
}

export default ReduxProvider;
