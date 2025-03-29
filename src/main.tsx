import "./styles/index.css";
import App from "./App.tsx";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import { WaresList } from "./pages/wares/wareList.tsx";
import { AddWares } from "./pages/wares/addWares.tsx";
import { Layout } from "./layout/Layout.tsx";
import { WorkerList } from "./pages/admin/workers/workerList.tsx";
import { Worker } from "./pages/admin/workers/worker.tsx";
import { AboutUs } from "./pages/about/index.tsx";

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<App />} />
          </Route>
          <Route path="/wares" element={<Layout />}>
            <Route index element={<WaresList />} />
          </Route>
          <Route path="/addWare" element={<Layout />}>
            <Route index element={<AddWares />} />
          </Route>
          <Route path="about" element={<Layout />}>
            <Route index element={<AboutUs />} />
          </Route>
          <Route path="/admin/workers" element={<Layout />}>
            <Route index element={<WorkerList />} />
          </Route>
          <Route path="/admin/worker" element={<Layout />}>
            <Route index element={<Worker />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
} else {
  console.error("Root element not found");
}
