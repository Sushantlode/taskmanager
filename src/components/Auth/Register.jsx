import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

const Register = () => {
  const [userData, setUserData] = useState({
    username: '',
    password: '',
  });
  const { register } = useAuth();

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(userData);
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <h2>Register</h2>
      <div className="form-group">
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={userData.username}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="submit-btn">
        Register
      </button>
    </form>
  );
};

export default Register;