// api.js

import axios from 'axios';

// Determine the base URL for API requests based on environment variables
const apiUrl =
  process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_API_URL_PROD
    : process.env.REACT_APP_API_URL_DEV;

// Create an Axios instance with the baseURL
const axiosInstance = axios.create({
  baseURL: apiUrl,
});

export default axiosInstance;
