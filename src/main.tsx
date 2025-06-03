import "./styles/index.css";
import App from "./App.tsx";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import { Layout } from "./layout/Layout.tsx";
import { WorkerList } from "./pages/admin/workers/workerList.tsx";
import { AboutUs } from "./pages/static/about/index.tsx";
import { OffersList } from "./pages/offers/offersList.tsx";
// import { AuthProvider } from "./AuthContext.tsx";
import AdminDashboard from "./pages/admin/index";
import PrivateRoute from "./PrivateRoute.tsx";
import { AdminLayout } from "./layout/AdminLayout.tsx";
import { Login } from "./pages/auth/user/login.tsx";
// import AdminLogin from "./pages/auth/admin/login.tsx";
import { Register } from "./pages/auth/register.tsx";
import { Terms } from "./pages/static/legal/terms.tsx";
import { Privacy } from "./pages/static/legal/privacy.tsx";
import { DataProtection } from "./pages/static/legal/data-protection.tsx";
import FAQ from "./pages/static/legal/faq.tsx";
import { OfferDetails } from "./pages/offers/offerDetails/[id].tsx";
import { WorkerDetails } from "./pages/admin/workers/workerDetails/[id].tsx";
import { EditOffer } from "./pages/admin/offers/edit/[id].tsx";
import { AdminOffersList } from "./pages/admin/offers/offersList.tsx";
import { AddOffer } from "./pages/admin/offers/addOffer.tsx";
import { AddWorker } from "./pages/admin/workers/addWorker.tsx";
import { EditWorker } from "./pages/admin/workers/edit/[id].tsx";
import Contact from "./pages/contact/index.tsx";

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      {/* <AuthProvider> */}
      <BrowserRouter>
        <Routes>
          {/* <Route path="/admin/login" element={<AdminLogin />} /> */}
          <Route path="/" element={<Layout />}>
            <Route index element={<App />} />
            <Route path="/login" element={<Login />} />
            <Route path="/offers" element={<OffersList />} />
            <Route path="/offer/:id" element={<OfferDetails />} />
            <Route path="/register" element={<Register />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="/regulamin" element={<Terms />} />
            <Route path="/polityka-prywatnosci" element={<Privacy />} />
            <Route
              path="/ochrona-danych-osobowych"
              element={<DataProtection />}
            />
            <Route
              path="/offers"
              element={
                <PrivateRoute>
                  <OffersList />
                </PrivateRoute>
              }
            />
          </Route>
          <Route
            path="/admin"
            element={
              <AdminLayout />
              // <PrivateRoute requireAdmin>
              /* </PrivateRoute> */
            }
          >
            <Route path="index" element={<AdminDashboard />} />
            <Route path="offers" element={<AdminOffersList />} />
            <Route path="offer/edit/:id" element={<EditOffer />} />
            <Route path="offer/add" element={<AddOffer />} />
            <Route path="workers" element={<WorkerList />} />
            <Route path="worker/add" element={<AddWorker />} />
            <Route path="worker/edit/:id" element={<EditWorker />} />
            <Route path="worker/:id" element={<WorkerDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* </AuthProvider> */}
    </React.StrictMode>
  );
} else {
  console.error("Root element not found");
}
