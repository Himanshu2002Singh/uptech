// src/api/axios.js or axios.ts
import axios from 'axios';

// For Vite
const baseURL = import.meta.env.VITE_API_BASE_URL;

// For Create React App, use:
// const baseURL = process.env.REACT_APP_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL,
});

export default axiosInstance;
