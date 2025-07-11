// axios instance
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://skyroottaskbackend.onrender.com',  // Spring Boot backend
  withCredentials: true              // Important for session-based auth
});

export default api;
