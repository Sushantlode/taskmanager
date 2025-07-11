import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });
  const { login } = useAuth();

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(credentials);
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <h2>Login</h2>
      <div className="form-group">
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="submit-btn">
        Login
      </button>
    </form>
  );
};

export default Login;