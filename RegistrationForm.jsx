import React, { useState } from 'react';

function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log("Username:", username, "Password:", password);
  };

  return (
    <div id="registration-form">
      <h2>Register</h2>
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
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <a href="#" id="login-link">Sign In</a></p>
    </div>
  );
}
const handleSubmit = (event) => {
    event.preventDefault();
    
    localStorage.setItem('customers', JSON.stringify(customers)); // Store in localStorage
  };

export default RegistrationForm;