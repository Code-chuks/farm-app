document.addEventListener('DOMContentLoaded', () => {
    // Toggle between Consumer and Farmer buttons
    document.querySelectorAll('.consumerFarmerButton button').forEach(button => {
        button.addEventListener('click', function () {
            document.querySelectorAll('.consumerFarmerButton button').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Sign In button handler
    document.querySelector('.signInButton').addEventListener('click', function (e) {
        e.preventDefault();
        const email = document.querySelector('.emailField').value;
        const password = document.querySelector('.passwordField').value;

        if (!email || !password) {
            alert('Please fill in both fields');
            return;
        }

        // You can add actual sign-in logic here
        console.log('Email:', email);
        console.log('Password:', password);

        alert('Sign In successful!');
    });

    // Google Sign In button handler
    document.querySelector('.googleButton').addEventListener('click', function () {
        alert('Google Sign In not implemented yet.');
    });
});
