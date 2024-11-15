const balanceElement = document.getElementById('balance');
const depositAmountInput = document.getElementById('deposit-amount');
const withdrawalAmountInput = document.getElementById('withdrawal-amount');
const depositButton = document.getElementById('deposit-button');
const withdrawalButton = document.getElementById('withdrawal-button');
const transactionList = document.getElementById('transaction-list'); // Get a reference to the transaction list

let balance = 0;
let transactions = []; // Array to store transactions

function updateBalance() {
  balanceElement.textContent = balance.toFixed(2);
}

function addTransaction(type, amount) {
  transactions.push({
    date: new Date().toLocaleDateString(),
    type: type,
    amount: amount
  });
  updateTransactionList(); // Update the transaction list display
}

function updateTransactionList() {
  transactionList.innerHTML = ''; // Clear the existing list

  transactions.forEach(transaction => {
    const newRow = transactionList.insertRow();
    const dateCell = newRow.insertCell();
    dateCell.textContent = transaction.date;
    const typeCell = newRow.insertCell();
    typeCell.textContent = transaction.type;
    const amountCell = newRow.insertCell();
    amountCell.textContent = transaction.amount.toFixed(2);
  });
}

depositButton.addEventListener('click', () => {
  const depositAmount = parseFloat(depositAmountInput.value);

  if (depositAmount > 0) {
    balance += depositAmount;
    updateBalance();
    depositAmountInput.value = '';
    console.log('Deposit successful!');
    addTransaction('Deposit', depositAmount); // Add the deposit transaction
  } else {
    alert('Invalid deposit amount. Please enter a positive number.');
  }
});

withdrawalButton.addEventListener('click', () => {
  const withdrawalAmount = parseFloat(withdrawalAmountInput.value);

  if (withdrawalAmount > 0 && withdrawalAmount <= balance) {
    balance -= withdrawalAmount;
    updateBalance();
    withdrawalAmountInput.value = '';
    console.log('Withdrawal successful!');
    addTransaction('Withdrawal', withdrawalAmount); // Add the withdrawal transaction
  } else if (withdrawalAmount <= 0) {
    alert('Invalid withdrawal amount. Please enter a positive number.');
  } else {
    alert('Insufficient funds.');
  }
});

updateBalance();
updateTransactionList(); // Display initial transactions