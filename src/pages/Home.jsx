import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page">
      <h1 >Welcome to Skyroot Task Manager</h1>
      <p>Manage your tasks efficiently with our application.</p>
      <div className="auth-options">
        <Link to="/login" className="auth-link">
          Login
        </Link>
        <span> or </span>
        <Link to="/register" className="auth-link">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Home;