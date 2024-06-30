document.addEventListener('DOMContentLoaded', (event) => {
    // Subscribe Button Functionality
    const subscribeButton = document.getElementById('subscribeButton');
    const subscribeCheckbox = document.getElementById('subscribeCheckbox');
    const notification = document.getElementById('notification');

    subscribeButton.addEventListener('click', () => {
        if (subscribeCheckbox.checked) {
            notification.textContent = 'Thank you for subscribing!';
            notification.style.color = 'green';
        } else {
            notification.textContent = 'Please agree to the terms before subscribing.';
            notification.style.color = 'red';
        }
        setTimeout(() => {
            notification.textContent = '';
        }, 3000);
    });

    // Star Rating Hover Effect
    const starContainers = document.querySelectorAll('.farmer-review svg');
    
    starContainers.forEach(container => {
        const stars = container.querySelectorAll('path');
        stars.forEach((star, index) => {
            star.addEventListener('mouseover', () => {
                highlightStars(stars, index);
            });

            star.addEventListener('mouseout', () => {
                resetStars(stars);
            });

            star.addEventListener('click', () => {
                setRating(stars, index);
            });
        });
    });

    function highlightStars(stars, index) {
        for (let i = 0; i <= index; i++) {
            stars[i].style.fill = '#FFCC29';
        }
    }

    function resetStars(stars) {
        stars.forEach(star => {
            if (!star.classList.contains('rated')) {
                star.style.fill = 'none';
            }
        });
    }

    function setRating(stars, index) {
        stars.forEach((star, i) => {
            if (i <= index) {
                star.classList.add('rated');
                star.style.fill = '#FFCC29';
            } else {
                star.classList.remove('rated');
                star.style.fill = 'none';
            }
        });
    }

    // Like Button Functionality
    const likeButtons = document.querySelectorAll('.bx-like');

    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('liked');
            if (button.classList.contains('liked')) {
                button.style.color = 'red';
            } else {
                button.style.color = '';
            }
        });
    });
});
