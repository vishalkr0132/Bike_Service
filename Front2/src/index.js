// Importing necessary modules and styles
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Importing the main App component
import App from "./App";

// Importing web vitals reporting function
import reportWebVitals from "./reportWebVitals";

// Importing BrowserRouter for client-side routing
import { BrowserRouter } from "react-router-dom";

// Importing HelmetProvider for managing document head elements asynchronously
import { HelmetProvider } from "react-helmet-async";

// Creating a root for ReactDOM rendering
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering the app within HelmetProvider and BrowserRouter
root.render(
  <HelmetProvider>
    <BrowserRouter>
      {/* Enabling strict mode for additional development checks */}
      <React.StrictMode>
        {/* Rendering the main App component */}
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </HelmetProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint.
// Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
