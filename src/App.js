import React from "react";
import { ToastContainer } from "react-toastify";
import Routes from "./routes.js";
import { GlobalStyle } from "./global.js";

const App = () => {
  return (
    <>
      <Routes />
      <GlobalStyle />
      <ToastContainer
        autoClose={3000}
        className="toast-container"
        position="top-center"
      />
      ;
    </>
  );
};
export default App;
