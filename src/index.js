import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { render } from "@testing-library/react";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
