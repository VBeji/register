// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';
import RegistrationForm from './RegistrationForm';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (user) => {
    setLoggedIn(true);
    setUsername(user);
    // Save the username to localStorage for session management
    localStorage.setItem('username', user);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    alert(username)
    setUsername('');
    alert(username)
    // Clear the username from localStorage on logout
    localStorage.removeItem('username');
   
  };

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
        <Route
          path="/dashboard"
          element={<Dashboard username={username} onLogout={handleLogout} />}
        />
        <Route path="/register" element={<RegistrationForm />} />
      </Routes>
    </Router>
  );
};

export default App;
