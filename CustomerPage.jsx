import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 

function CustomerPage() {
  const { username } = useParams(); 
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const customerData = {
      'Gathoni': { balance: 1000, transactions: ['Deposit: $500', 'Withdrawal: $200'] },
      'Craig': { balance: 500, transactions: ['Deposit: $100', 'Withdrawal: $50'] },
      'Narah': { balance: 2000, transactions: ['Deposit: $1500', 'Withdrawal: $800'] }
    };

    if (customerData[username]) {
      setBalance(customerData[username].balance);
      setTransactions(customerData[username].transactions);
    } else {
    }
  }, [username]);

  return (
    <div id="customer-details">
      <h2>Welcome, {username}</h2>
      <p>Current Balance: ${balance}</p>
      <h3>Transactions:</h3>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>{transaction}</li>
        ))}
      </ul>
      {/* Add deposit and withdrawal functionality here */}
    </div>
  );
}

export default CustomerPage;