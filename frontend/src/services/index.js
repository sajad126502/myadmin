import axios from 'axios';

// Create a new Axios instance with custom configuration
const api = axios.create({
  baseURL: process.env.REACT_APP_URL, // Base URL for API requests
  timeout: 5000, // Request timeout in milliseconds
//   headers: {
//     'Content-Type': 'application/json', // Default content type header
//   },
});

export default api;
