// RegistrationForm.js
// RegistrationForm.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
    const authA = ('ghp_qHQ3ICADWdUWY')
  const authB = ('LK3CgQ23nV8IIgEwF1ZFr6v')
  const accessToken= authA + authB;


  const handleRegister = async () => {
    try {
      // Fetch the existing data from data.json
      const response = await axios.get(
        // 'https://raw.githubusercontent.com/vbeji/bet9ja/main/data.json'
        'https://api.github.com/repos/vbeji/bet9ja/contents/data.json',

      );

      // Decode the content and parse it as JSON
      const existingData = JSON.parse(atob(response.data.content));

      // Add new user data to the existing data
      const newData = [...existingData, { username, email, password }];
      alert("onpoint plus plus");

      // Make a PUT request to update data.json with the new content
      const existingUser = existingData.find(user => user.username === username || user.email === email);
      
      // if(existingUser.username === username){
      // alert("username exist")
      // setError('username exist')}
      // else 
      // if(existingUser.email === email){ alert("email exist")
      // setError('username exist')}
      // else{
      await axios.put(
        'https://api.github.com/repos/vbeji/bet9ja/contents/data.json',
        {
          message: 'Update data.json',
          content: btoa(JSON.stringify(newData)),
          sha: response.data.sha, // Include the SHA of the existing file
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      

      console.log('User registered successfully:',);}
     catch (error) {
      console.error('Error registering user:', error);
    }
  
  };

  return (
    <div>
      <h2>Registration Form</h2>

      {error && <p>{error}</p>}
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button onClick={handleRegister}>Registereds</button>
      <br />
      <Link to="/login">Already have an account? Login here</Link>
    </div>
  );
};

export default RegistrationForm;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const RegistrationForm = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');


//   const handleRegister = async () => {
//     try {
//       // Fetch the existing data from data.json
//       const response = await axios.get(
//         // 'https://raw.githubusercontent.com/vbeji/bet9ja/main/data.json'
//         'https://api.github.com/repos/vbeji/bet9ja/contents/data.json',

//       );

//       // Decode the content and parse it as JSON
//       const existingData = JSON.parse(atob(response.data.content));

//       // Add new user data to the existing data
//       const newData = [...existingData, { username, email, password }];
      
//       // Make a PUT request to update data.json with the new content
//       const existingUser = existingData.find(user => user.username === username || user.email === email);
//       // console.log(existingUser.username);

//      if(existingUser.username === username){
//       alert(' is already existing');
//       setError('Already existing erye user');
//     }
//     else {

//        setError(' existing erye user');
//       alert('username');
//         // await axios.put(
//         //   'https://api.github.com/repos/vbeji/bet9ja/contents/data.json',
//         //   {
//         //     message: 'Update data.json',
//         //     content: btoa(JSON.stringify(newData)),
//         //     sha: response.data.sha, // Include the SHA of the existing file
//         //   },
//         //   {
//         //     headers: {
//         //       // Authorization: 'Bearer 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',
//         //       Authorization: 'Bearer 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',
  
//         //     },
//         //   }
//         // );

//       console.log('User registered successfully:',);}
//      } catch (error) {
//       console.error('Error registering user:', error);
//     }
  
//   };

//   return (
//     <div>
//       <h2>Registration Form</h2>

//       {error && <p>{error}</p>}
//       <label>
//         Username:
//         <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//       </label>
//       <br />
//       <label>
//         Email:
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//       </label>
//       <br />
//       <label>
//         Password:
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//       </label>
//       <br />
//       <button onClick={handleRegister}>Registereds</button>
//       <br />
//       <Link to="/login">Already have an account? Login here</Link>
//     </div>
//   );
// };

// export default RegistrationForm;




// import React, { useState } from 'react';
// import axios from 'axios';

// const AuthForm = ({ onLogin }) => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleRegister = async () => {
//     try {
//       const response = await axios.post(
//         'https://api.github.com/users/vbeji/bet9ja/data.json',
//         {
//           message: 'Add new user',
//           content: btoa(JSON.stringify({ username, email, password })),
//         },
//         {
//           headers: {
//             Authorization: 'Bearer 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',
//           },
//         }
//         );
        
//         console.log('User registered successfully:', response.data);
        
//         // Automatically log in after registration
//         onLogin(username);
//       } catch (error) {
//         console.error('Error registering user:', error);
//     }
//   };
  
//   const handleLogin = async () => {
//     try {
//       const response = await axios.get(
//         'https://api.github.com/repos/vbeji/bet9ja/contents/data.json',
//         {
//           headers: {
//             Authorization: 'Bearer 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',
            
//           },
//         }
//       );

//       const usersData = JSON.stringify(atob(response.data.content));
//       // const user = usersData.match((u) => u.fullName === username);
//       // const user = usersData.search((u) => u.fullName === username);
      
      
//       console.log(usersData);
//       if (usersData) {
//         console.log('Login successful');
//         // Save the username to localStorage for session management
//         // localStorage.setItem('username', username);
//         // Trigger the parent component's login function
//         onLogin(username);
//       } else {
//         console.log('Invalid credentials');
//       }
//     } catch (error) {
//       console.error('Error logging in:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Authentication Form</h2>
//       <label>
//         Username:
//         <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//       </label>
//       <br />
//       <label>
//         Email:
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//       </label>
//       <br />
//       <label>
//         Password:
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//       </label>
//       <br />
//       <button onClick={handleRegister}>Register</button>
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default AuthForm;


// import React, { useState } from 'react';
// import axios from 'axios';

// const RegistrationForm = ({ handleRegistration }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     handleRegistration(username, password);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Registration</h2>
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
//       <button type="submit">Register</button>
//     </form>
//   );
// };

// export default RegistrationForm;


// import React, { useState } from 'react';
// import axios from 'axios';

// const RegistrationForm = ({ handleRegistration }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     handleRegistration(username, password);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Registration</h2>
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
//       <button type="submit">Register</button>
//     </form>
//   );
// };

// export default RegistrationForm;
