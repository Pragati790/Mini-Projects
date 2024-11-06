const loginTab = document.getElementById('loginTab');
const signupTab = document.getElementById('signupTab');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

// Function to switch tabs
function switchTab(tab) {
    if (tab === 'login') {
        loginTab.classList.add('active');
        signupTab.classList.remove('active');
        loginForm.classList.add('active');
        signupForm.classList.remove('active');
    } else if (tab === 'signup') {
        signupTab.classList.add('active');
        loginTab.classList.remove('active');
        signupForm.classList.add('active');
        loginForm.classList.remove('active');
    }
}

// Add event listeners to the tab buttons
loginTab.addEventListener('click', () => switchTab('login'));
signupTab.addEventListener('click', () => switchTab('signup'));

// Set initial view to Login form
switchTab('login');

// Signup functionality
signupForm.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();

    // Get signup details
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validate password confirmation
    if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return;
    }

    // Save credentials in localStorage
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    alert("Signup successful! You can now log in.");
    
    // Switch to login tab
    switchTab('login');
});

// Login functionality
loginForm.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();

    // Get login details
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Retrieve stored credentials from localStorage
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    // Validate credentials
    if (email === storedEmail && password === storedPassword) {
        alert("Login successful!");
    } else {
        alert("Invalid login. Please check your credentials.");
    }
});
