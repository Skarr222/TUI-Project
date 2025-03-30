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
import { AuthProvider } from "./AuthContext.tsx";
import AdminDashboard from "./pages/admin/index";
import AdminLogin from "./pages/admin/login.tsx";
import PrivateRoute from "./PrivateRoute.tsx";
import { AdminLayout } from "./layout/AdminLayout.tsx";

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/" element={<Layout />}>
              <Route index element={<App />} />
              <Route path="/login" element={<Login />} />
              <Route path="/offers" element={<OffersList />} />
              <Route path="/about-us" element={<AboutUs />} />
            </Route>
            <Route path="/admin" element={<PrivateRoute />}>
              <Route element={<AdminLayout />}>
                <Route index element={<AdminDashboard />} />
                <Route path="addOffer" element={<Layout />}>
                  <Route index element={<AddOffer />} />
                </Route>
                <Route path="workers" element={<Layout />}>
                  <Route index element={<WorkerList />} />
                </Route>
                <Route path="worker" element={<Layout />}>
                  <Route index element={<Worker />} />
                </Route>
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </React.StrictMode>
  );
} else {
  console.error("Root element not found");
}
