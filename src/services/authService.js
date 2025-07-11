import axios from 'axios';
import { toast } from 'react-toastify';

const API_URL = 'https://skyroottaskbackend.onrender.com/auth';

axios.defaults.withCredentials = true;

export const loginUser = async ({ username, password }) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    toast.success('Login successful');
    return response.data;
  } catch (error) {
    toast.error(error.response?.data || 'Login failed');
    throw error;
  }
};

export const registerUser = async (userData) => {
  try {
    await axios.post(`${API_URL}/register`, userData);
    toast.success('Registration successful! Please login.');
  } catch (error) {
    toast.error(error.response?.data || 'Registration failed');
    throw error;
  }
};

export const logoutUser = async () => {
  try {
    await axios.post(`${API_URL}/logout`);
    toast.success('Logged out successfully');
  } catch (error) {
    toast.error('Logout failed');
    throw error;
  }
};