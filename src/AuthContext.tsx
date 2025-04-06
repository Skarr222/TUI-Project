// src/AuthContext.tsx

import React, { createContext, useState, useContext, ReactNode } from "react";
import { User } from "./models/User";

interface AuthContextType {
  isCustomerAuthenticated: boolean;
  customerUser: User | null;
  customerToken: string | null;
  isAdminAuthenticated: boolean;
  adminUser: User | null;
  adminToken: string | null;
  isLoading: boolean;
  error: string | null;
  loginCustomer: (credentials: Credentials) => Promise<void>;
  loginAdmin: (credentials: Credentials) => Promise<void>;
  logoutCustomer: () => void;
  logoutAdmin: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}
interface Credentials {
  email: string;
  password: string;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isCustomerAuthenticated, setIsCustomerAuthenticated] = useState(
    !!localStorage.getItem("customerToken")
  );
  const [customerUser, setCustomerUser] = useState<User | null>(null); // Replace with customer user type
  const [customerToken, setCustomerToken] = useState<string | null>(
    localStorage.getItem("customerToken")
  );

  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(
    !!localStorage.getItem("adminToken")
  );
  const [adminUser, setAdminUser] = useState<User | null>(null); // Replace with admin user type
  const [adminToken, setAdminToken] = useState<string | null>(
    localStorage.getItem("adminToken")
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loginCustomer = async (credentials: Credentials) => {
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
      console.error(err);
      setError("Network error");
    } finally {
      setIsLoading(false);
    }
  };

  const loginAdmin = async (credentials: Credentials) => {
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
      console.error(err);
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

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
