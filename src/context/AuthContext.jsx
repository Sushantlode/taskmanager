import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser, registerUser, logoutUser } from '../services/authService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // You might want to add an endpoint to check session status
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  const login = async (credentials) => {
    try {
      const userData = await loginUser(credentials);
      setUser(userData);
      navigate('/dashboard');
    } catch (error) {
      throw error;
    }
  };

  const register = async (userData) => {
    try {
      await registerUser(userData);
      navigate('/login');
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    try {
      await logoutUser();
      setUser(null);
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);