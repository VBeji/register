// Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = ({ username, onLogout }) => {
  const handleLogout = () => {
    // Clear the logged-in user state
    onLogout();
  };

  return (
    <div>
      <h2>Welcome, {username}!</h2>
      {/* Dashboard content goes here */}
      <button onClick={handleLogout}>Logout</button>
      <Link to="/login" onClick={handleLogout}>Logout</Link>
    </div>
  );
};

export default Dashboard;
