document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for navigation links
    document.querySelectorAll('.nav-link a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Subscription button handler
    document.getElementById('subscribeButton').addEventListener('click', () => {
        const checkbox = document.getElementById('subscribeCheckbox');
        const notification = document.getElementById('notification');
        if (checkbox.checked) {
            notification.textContent = 'Thank you for subscribing!';
            notification.style.color = 'green';
        } else {
            notification.textContent = 'Please agree to the privacy policy.';
            notification.style.color = 'red';
        }
    });

    // FAQ toggle
    document.querySelectorAll('.question-section p').forEach(question => {
        question.addEventListener('click', () => {
            question.classList.toggle('open');
            const img = question.querySelector('img');
            if (question.classList.contains('open')) {
                img.src = './images/arrow-down.png'; // Change to a down arrow image
                question.nextElementSibling.style.display = 'block';
            } else {
                img.src = './images/arrow-up.png'; // Change to an up arrow image
                question.nextElementSibling.style.display = 'none';
            }
        });
    });
});
