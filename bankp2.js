const balanceElement = document.getElementById('balance');
const depositAmountInput = document.getElementById('deposit-amount');
const withdrawalAmountInput = document.getElementById('withdrawal-amount');
const depositButton = document.getElementById('deposit-button');
const withdrawalButton = document.getElementById('withdrawal-button');
const transactionList = document.getElementById('transaction-list');

let balance = 0;
let transactions = [];

function updateBalance() {
  balanceElement.textContent = balance.toFixed(2);
}

function addTransaction(type, amount) {
  transactions.push({
    date: new Date().toLocaleDateString(),
    type: type,
    amount: amount,
    newBalance: balance
  });
  updateTransactionList();
}

function updateTransactionList() {
  transactionList.innerHTML = '';

  transactions.forEach(transaction => {
    const newRow = transactionList.insertRow();
    const dateCell = newRow.insertCell();
    dateCell.textContent = transaction.date;
    const typeCell = newRow.insertCell();
    typeCell.textContent = transaction.type;
    const amountCell = newRow.insertCell();
    amountCell.textContent = transaction.amount.toFixed(2);
    const newBalanceCell = newRow.insertCell();
    newBalanceCell.textContent = transaction.newBalance.toFixed(2);
  });
}

depositButton.addEventListener('click', () => {
  const depositAmount = parseFloat(depositAmountInput.value);

  if (depositAmount > 0) {
    balance += depositAmount;
    updateBalance();
    depositAmountInput.value = '';
    console.log('Deposit successful!');
    addTransaction('Deposit', depositAmount);
  } else {
    alert('Haiwezekani.');
  }
});

withdrawalButton.addEventListener('click', () => {
  const withdrawalAmount = parseFloat(withdrawalAmountInput.value);

  if (withdrawalAmount > 0 && withdrawalAmount <= balance) {
    balance -= withdrawalAmount;
    updateBalance();
    withdrawalAmountInput.value = '';
    console.log('Withdrawal successful!');
    addTransaction('Withdrawal', withdrawalAmount);
  } else if (withdrawalAmount <= 0) {
    alert('Hauna hela za kutosha.');
  } else {
    alert('Hauna hela za kutosha.');
  }
});

updateBalance();
updateTransactionList();

let slideIndex = 0;
let autoPlayInterval;

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("carousel-item");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  slides[slideIndex - 1].style.transform = "translateX(0)";
}

function nextSlide() {
  showSlides();
}

function prevSlide() {
  slideIndex--;
  if (slideIndex < 1) { slideIndex = slides.length }
  showSlides();
}

function startAutoPlay() {
  autoPlayInterval = setInterval(nextSlide, 3000);
}

function stopAutoPlay() {
  clearInterval(autoPlayInterval);
}

showSlides();
startAutoPlay();

const carouselContainer = document.querySelector(".carousel-container");
carouselContainer.addEventListener("mouseover", stopAutoPlay);
carouselContainer.addEventListener("mouseout", startAutoPlay);





const registrationForm = document.getElementById('registration-form');
const loginForm = document.getElementById('login-form');
const loginLink = document.getElementById('login-link');

const customers = {
  "Gathoni": {
    password: "password1", 
    balance: 0, 
    transactions: []
  },
  "Craig": {
    password: "password2", 
    balance: 0, 
    transactions: []
  },
  "Narah": {
    password: "password3", 
    balance: 0, 
    transactions: []
  }
};

registrationForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;


  if (customers[username]) {
    alert("Username already exists.");
  } else { 
    customers[username] = { 
      password: password, 
      balance: 0,
      transactions: []
    };
    alert("Registration successful!");
    registrationForm.style.display = 'none';
    loginForm.style.display = 'block';
  }
});

loginLink.addEventListener('click', (event) => {
  event.preventDefault();
  registrationForm.style.display = 'none';
  loginForm.style.display = 'block'; 
});

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (customers[username] && customers[username].password === password) {
    window.location.href = `customer.html?username=${username}`;
  } else {
    alert('Invalid username or password.');
  }
});






const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username'); 


const customerDetails = document.getElementById('customer-details');


if (customers[username]) {
  customerDetails.innerHTML = `
    <h2>Welcome, ${username}</h2>
    <p>Current Balance: $${customers[username].balance}</p>
    <h3>Transactions:</h3>
    <ul>
      ${customers[username].transactions.map((transaction, index) => `<li key="${index}">${transaction}</li>`).join('')}
    </ul>
    <button id="deposit-button">Deposit</button>
    <button id="withdrawal-button">Withdraw</button>
  `;

 
} else {
  alert('Invalid username.');
}




