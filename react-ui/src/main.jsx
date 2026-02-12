import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProvider } from "./context/AppContext";
import { ExpenseModalProvider } from "./context/ExpenseModalContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <ExpenseModalProvider>
        <App />
      </ExpenseModalProvider>
    </AppProvider>
  </React.StrictMode>
);
