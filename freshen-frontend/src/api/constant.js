// src/api.js
import axios from 'axios';

// Load backend URL from environment variables
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

// Axios instance for API calls
const api = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;