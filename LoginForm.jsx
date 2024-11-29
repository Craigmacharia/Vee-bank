import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // For routing

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic (e.g., validate data, check if user exists)
    if (username === 'Gathoni' && password === 'password1' || 
        username === 'Craig' && password === 'password2' ||
        username === 'Narah' && password === 'password3') {
      navigate(`/customer/${username}`); // Redirect to the customer's page
    } else {
      alert('Invalid username or password.');
    }
  };

  return (
    <div id="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          id="username" 
          placeholder="Username" 
          required 
          value={username} 
          onChange={(e) => setUsername(e.target.value)}
        />
        <input 
          type="password" 
          id="password" 
          placeholder="Password" 
          required 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;