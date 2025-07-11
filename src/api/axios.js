// axios instance
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080',  // Spring Boot backend
  withCredentials: true              // Important for session-based auth
});

export default api;
