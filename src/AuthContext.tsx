// src/AuthContext.tsx

import React, { createContext, useState, useContext, ReactNode } from "react";

interface AuthContextType {
  isCustomerAuthenticated: boolean;
  customerUser: any | null; // Replace with customer user type
  customerToken: string | null;
  isAdminAuthenticated: boolean;
  adminUser: any | null; // Replace with admin user type
  adminToken: string | null;
  isLoading: boolean;
  error: string | null;
  loginCustomer: (credentials: any) => Promise<void>; // Replace with customer credentials type
  loginAdmin: (credentials: any) => Promise<void>; // Replace with admin credentials type
  logoutCustomer: () => void;
  logoutAdmin: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isCustomerAuthenticated, setIsCustomerAuthenticated] = useState(
    !!localStorage.getItem("customerToken")
  );
  const [customerUser, setCustomerUser] = useState<any | null>(null); // Replace with customer user type
  const [customerToken, setCustomerToken] = useState<string | null>(
    localStorage.getItem("customerToken")
  );
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(
    !!localStorage.getItem("adminToken")
  );
  const [adminUser, setAdminUser] = useState<any | null>(null); // Replace with admin user type
  const [adminToken, setAdminToken] = useState<string | null>(
    localStorage.getItem("adminToken")
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loginCustomer = async (credentials: any) => {
    setIsLoading(true);
    setError(null);
    try {
      //! Customer login endpoint
      const response = await fetch("/api/customer/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });
      const data = await response.json();
      if (response.ok) {
        setCustomerToken(data.token);
        localStorage.setItem("customerToken", data.token);
        setIsCustomerAuthenticated(true);
        setCustomerUser(data.user);
      } else {
        setError(data.message || "Customer login failed");
      }
    } catch (err) {
      setError("Network error");
    } finally {
      setIsLoading(false);
    }
  };

  const loginAdmin = async (credentials: any) => {
    setIsLoading(true);
    setError(null);
    try {
      //! Admin login endpoint
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });
      const data = await response.json();
      if (response.ok) {
        setAdminToken(data.token);
        localStorage.setItem("adminToken", data.token);
        setIsAdminAuthenticated(true);
        setAdminUser(data.user);
      } else {
        setError(data.message || "Admin login failed");
      }
    } catch (err) {
      setError("Network error");
    } finally {
      setIsLoading(false);
    }
  };

  const logoutCustomer = () => {
    localStorage.removeItem("customerToken");
    setIsCustomerAuthenticated(false);
    setCustomerUser(null);
    setCustomerToken(null);
  };

  const logoutAdmin = () => {
    localStorage.removeItem("adminToken");
    setIsAdminAuthenticated(false);
    setAdminUser(null);
    setAdminToken(null);
  };

  const value: AuthContextType = {
    isCustomerAuthenticated,
    customerUser,
    customerToken,
    isAdminAuthenticated,
    adminUser,
    adminToken,
    isLoading,
    error,
    loginCustomer,
    loginAdmin,
    logoutCustomer,
    logoutAdmin,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
