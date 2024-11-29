import React, { createContext, useState, useEffect } from 'react';

const CustomerContext = createContext();

function CustomerProvider({ children }) {
  const [customerData, setCustomerData] = useState(null);

  useEffect(() => {
    // Fetch customer data from localStorage
    const storedCustomers = JSON.parse(localStorage.getItem('customers')) || {}; 
    setCustomerData(storedCustomers);
  }, []); // Run once when the component mounts

  return (
    <CustomerContext.Provider value={customerData}>
      {children}
    </CustomerContext.Provider>
  );
}

export { CustomerContext, CustomerProvider };