import "./styles/index.css";
import App from "./App.tsx";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import { Layout } from "./layout/Layout.tsx";
import { WorkerList } from "./pages/admin/workers/workerList.tsx";
import { Worker } from "./pages/admin/workers/worker.tsx";
import { AboutUs } from "./pages/about/index.tsx";
import { OffersList } from "./pages/offers/offersList.tsx";
import { AddOffer } from "./pages/offers/addOffer.tsx";
import { Login } from "./pages/user/login.tsx";

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<App />} />
          </Route>
          <Route path="/offers" element={<Layout />}>
            <Route index element={<OffersList />} />
          </Route>

          <Route path="/about" element={<Layout />}>
            <Route index element={<AboutUs />} />
          </Route>
          <Route path="/login" element={<Layout />}>
            <Route index element={<Login />} />
          </Route>
          {/* Admin routes */}
          <Route path="admin/addOffer" element={<Layout />}>
            <Route index element={<AddOffer />} />
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
