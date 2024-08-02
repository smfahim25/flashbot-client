import axios from "axios";

const axiosClientWithoutToken = axios.create({
  baseURL: "https://flashbot-staging-bb3v6.ondigitalocean.app/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClientWithoutToken.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors globally
    console.error("Error in API request:", error);
    return Promise.reject(error);
  }
);

export default axiosClientWithoutToken;
