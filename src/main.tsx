import App from "./App.tsx";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import { createBrowserRouter } from "react-router-dom";
// const router = createBrowserRouter([]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
