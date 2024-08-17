import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://flashbot-staging-bb3v6.ondigitalocean.app/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use(
  (config) => {
    const token =
      typeof window !== "undefined" ? sessionStorage.getItem("token") : "";
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      window.location.replace("/auth/login");
      return Promise.reject(new Error("No token found. Redirecting to login."));
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors globally
    console.error("Error in API request:", error);
    return Promise.reject(error);
  }
);

export default axiosClient;
