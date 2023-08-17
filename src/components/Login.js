// src/components/Login.js
import React, { useState } from 'react';
import './Header.css'; // Import the styling for Login
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Login = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState('user');

  const navigate = useNavigate(); // Initialize useNavigate


  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // For demonstration purposes only (no  actual authentication)
    // Check if the provided credentials match the hardcoded values
    if (username === 'sushmitha' && password === 'abcd' && selectedRole === 'user') {
      console.log('Login successful');
      onClose();
      navigate('/User-dashboard');
    } else if (username === 'admin' && password === '1234' && selectedRole === 'admin') {
      console.log('Login successful as admin');
      onClose();
      navigate('/admin-dashboard');
    } else {
      console.log('Login failed');
    }
  };

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
  };

  return (
    <div className="login-container">
      <h2>Login Component</h2>
      <form onSubmit={handleLoginSubmit}>
        <div className="form-field">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="role">Role:</label>
          <select id="role" value={selectedRole} onChange={handleRoleChange}>
            <option value="user">User</option>
            <option value="translator">Translator</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <div className="form-buttons">
          <button type="submit">Login</button>
          <button type="button" onClick={onClose}>
            Close
          </button>
        </div>
      </form>
    </div> 
  );
};

export default Login;
