import axios from "axios";
import { useCallback, useState } from "react";
import { Role } from "../models/User";

const API_BASE_URL = "https://localhost:5001/api"; // <--- REPLACE WITH YOUR ACTUAL .NET API BASE URL

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// --- Axios Request Interceptor ---
// This interceptor will run before every request is sent.
// It's ideal for adding authorization tokens.
api.interceptors.request.use(
  (config) => {
    let token = "";
    // Get the appropriate token based on whether it's an admin or customer request
    // This logic might need to be more sophisticated depending on your routing/auth flow.
    // For now, we'll check both.
    const role = localStorage.getItem("role");
    token = localStorage.getItem("token") || "";

    if (role === Role.ADMIN) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    console.error("Axios Request Error:", error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      console.error("API Error Response:", error.response.data);
      console.error("API Error Status:", error.response.status);
      console.error("API Error Headers:", error.response.headers);

      if (error.response.status === 401) {
        console.log(
          "Unauthorized: Token expired or invalid. Please log in again."
        );
        localStorage.removeItem("customerToken");
        localStorage.removeItem("adminToken");

        window.location.href = "/login"; // Or a more sophisticated redirect
      } else if (error.response.status === 403) {
        console.log(
          "Forbidden: You do not have permission to access this resource."
        );
      } else if (error.response.status === 404) {
        console.log("Not Found: The requested resource could not be found.");
      }
    } else if (error.request) {
      console.error("API Error Request:", error.request);
      console.log(
        "No response received from server. Check network connection or API server status."
      );
    } else {
      console.error("Axios Error Message:", error.message);
      console.log("An unexpected error occurred while setting up the request.");
    }
    return Promise.reject(error);
  }
);

export default api;

export const useAxios = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const get = useCallback(async (url: string, config = {}) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get(url, config);
      setData(response.data);
      return response.data;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const post = useCallback(
    async (url: string, payload: unknown, config = {}) => {
      setLoading(true);
      setError(null);
      try {
        const response = await api.post(url, payload, config);
        setData(response.data);
        return response.data;
      } catch (err) {
        setError(err);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const put = useCallback(
    async (url: string, payload: unknown, config = {}) => {
      setLoading(true);
      setError(null);
      try {
        const response = await api.put(url, payload, config);
        setData(response.data);
        return response.data;
      } catch (err) {
        setError(err);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const del = useCallback(async (url: string, config = {}) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.delete(url, config);
      setData(response.data);
      return response.data;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, error, loading, get, post, put, del };
};
