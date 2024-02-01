// LoginForm.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Ensure axios is installed (npm install axios)

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.get(
        'https://api.github.com/repos/vbeji/bet9ja/contents/data.json'
      );

      // Decode the content and parse it as JSON
      const existingData = JSON.parse(atob(response.data.content));
      const existingUser = existingData.find(
        (user) => user.username === username && user.password === password
      );

      if (existingUser) {
        // Call the onLogin prop to update the loggedIn state in the parent component
        onLogin(existingUser.username);
        navigate('/dashboard');
      } else {
        setError('Invalid credentials. Please try again.');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      setError('Error fetching user data. Please try again.');
    }
  };

  return (
    <div>
      <h2>Login Form</h2>
      {error && <p>{error}</p>}
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button onClick={handleLogin}>Login</button>
      <br />
      <Link to="/register">Don't have an account? Register here</Link>
    </div>
  );
};

export default LoginForm;


// import React, { useState } from 'react';
// import axios from 'axios';

// const LoginForm = ({ handleLogin }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     handleLogin(username, password);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Login</h2>
//       <label>
//         Username:
//         <input
//           type="text"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//       </label>
//       <br />
//       <label>
//         Password:
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </label>
//       <br />
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default LoginForm;
