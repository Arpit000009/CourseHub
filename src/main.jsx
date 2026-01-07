import { StrictMode } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import App from "./App";
import { Toaster } from "react-hot-toast";
import AuthContext from "./context/AuthContext";

createRoot(document.getElementById("root")).render(
  <AuthContext>
    <Toaster />
    <App />
  </AuthContext>
);
