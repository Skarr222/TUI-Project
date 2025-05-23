// src/AuthContext.tsx
import React, { createContext, useState } from "react";
import { User } from "./models/User";

interface Credentials {
  email: string;
  password: string;
}

export interface AuthContextType {
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

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isCustomerAuthenticated, setIsCustomerAuthenticated] = useState(
    !!localStorage.getItem("customerToken")
  );
  const [customerUser, setCustomerUser] = useState<User | null>(null);
  const [customerToken, setCustomerToken] = useState<string | null>(
    localStorage.getItem("customerToken")
  );

  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(
    !!localStorage.getItem("adminToken")
  );
  const [adminUser, setAdminUser] = useState<User | null>(null);
  const [adminToken, setAdminToken] = useState<string | null>(
    localStorage.getItem("adminToken")
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loginCustomer = async (credentials: Credentials) => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch("http://localhost:5145/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("customerToken", data.token);
        setCustomerToken(data.token);
        setCustomerUser(data.user);
        setIsCustomerAuthenticated(true);
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
      const res = await fetch("http://localhost:5145/api/auth/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("adminToken", data.token);
        setAdminToken(data.token);
        setAdminUser(data.user);
        setIsAdminAuthenticated(true);
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
    setCustomerToken(null);
    setCustomerUser(null);
  };

  const logoutAdmin = () => {
    localStorage.removeItem("adminToken");
    setIsAdminAuthenticated(false);
    setAdminToken(null);
    setAdminUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
