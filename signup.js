// Function to toggle active button for Consumer/Farmer
function changeColour(button) {
    const buttons = document.querySelectorAll('.signup-sec-btn button');
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
}

// Show/hide password functionality
const eyeIcon = document.querySelector('.eye-icon img');
const passwordField = document.querySelector('input[type="password"]');

eyeIcon.addEventListener('click', () => {
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        eyeIcon.src = './Resources/eye-open.svg'; // Use the open eye icon
    } else {
        passwordField.type = 'password';
        eyeIcon.src = './Resources/eye.svg'; // Use the closed eye icon
    }
});

// Form submission handler
const signupForm = document.querySelector('form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(signupForm);
    
    const fullName = formData.get('full-name');
    const email = formData.get('email');
    const phone = formData.get('phone-number');
    const state = formData.get('state');
    const address = formData.get('address');
    const password = formData.get('password');

    // Perform validation and other logic here
    console.log({ fullName, email, phone, state, address, password });
    alert('Sign up successful!');
});
