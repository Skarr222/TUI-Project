import "./styles/index.css";
import App from "./App.tsx";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import { WaresList } from "./wares/wareList.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },

  {
    path: "/wares",
    Component: WaresList,
  },
]);
const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
} else {
  console.error("Root element not found");
}
