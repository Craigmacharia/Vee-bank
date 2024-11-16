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



const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  
  const storedUsers = localStorage.getItem('users');
  if (storedUsers) {
    const users = JSON.parse(storedUsers);
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
      
      localStorage.setItem('loggedInUser', JSON.stringify(user));

     
      window.location.href = 'index.html'; 
    } else {
      alert('Invalid username or password. Please register first.'); 
    }
  } else {
    alert('No users registered yet. Please register first.'); 
  }
});


const registrationForm = document.getElementById('registration-form'); 
registrationForm.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const name = document.getElementById('name').value;
  const accountNo = document.getElementById('accountNo').value;
  const branch = document.getElementById('branch').value;

  
  let users = []; 
  const storedUsers = localStorage.getItem('users'); 
  if (storedUsers) {
    users = JSON.parse(storedUsers);
  }

  
  const existingUser = users.find(u => u.username === username); 
  if (existingUser) {
    alert('Username already exists');
    return;
  }

  
  const newUser = {
    username,
    password,
    name,
    accountNo,
    branch
  };

  
  users.push(newUser);

  
  localStorage.setItem('users', JSON.stringify(users));

  
  alert('Registration successful! You can now login.'); 
  window.location.href = 'login.html'; 
});

