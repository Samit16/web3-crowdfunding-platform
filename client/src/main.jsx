import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { ThirdwebProvider } from "thirdweb/react";
import "./index.css"; 
import App from "./App";
import client from "./client";
import { StateContextProvider } from "./context";

const root= ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThirdwebProvider client={client}>
      <StateContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </StateContextProvider>
    </ThirdwebProvider>
  </React.StrictMode>
);