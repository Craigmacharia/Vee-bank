import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import CustomerPage from './CustomerPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/customer/:username" element={<CustomerPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
``````javascript
  // In RegistrationForm.jsx (Inside handleSubmit function)
  localStorage.setItem('customers', JSON.stringify(customers)); 

  // In CustomerPage.jsx (Inside useEffect function)
  const storedCustomers = JSON.