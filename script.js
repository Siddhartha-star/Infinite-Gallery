// Open modal for image/video
function openModal(element) {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const modalVideo = document.getElementById("modalVideo");

    if (element.tagName === "IMG") {
        modalImage.src = element.src;
        modalImage.style.display = "block";
        modalVideo.style.display = "none";
    } else if (element.tagName === "VIDEO") {
        modalVideo.src = element.querySelector("source").src;
        modalVideo.style.display = "block";
        modalImage.style.display = "none";
    }
}

// Add plan to cart and redirect
function addToCart(plan, price) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const existingPlanIndex = cart.findIndex(item => item.plan === plan);

    if (existingPlanIndex === -1) {
        cart.push({ plan, price });
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(plan + " has been added to your cart!");
    } else {
        alert(plan + " is already in your cart.");
    }

    window.location.href = 'productcart.html';
}

// Wait for the DOM to fully load before attaching event listeners
document.addEventListener('DOMContentLoaded', function () {
    // Check if we are on the index.html page
    const getStartedButton = document.getElementById('button');
    if (getStartedButton) {
        getStartedButton.addEventListener('click', function () {
            window.location.href = 'sign-up.html';
        });
    }
    


    
    // Check if we are on the login.html page
    const loginButton = document.getElementById('login');
    if (loginButton) {
        loginButton.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent form submission

            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value.trim();

            if (!username) {
                alert("Please fill out the username or email field.");
                return;
            }

            if (!password) {
                alert("Please fill out the password field.");
                return;
            }

            // If both fields are filled, navigate to the home page
            window.location.href = 'index.html';
        });
    }

    const forgotPasswordLink = document.getElementById('fg');
    if (forgotPasswordLink) {
        forgotPasswordLink.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default link behavior
            window.alert("Password reset option sent to email if user is already logged before");
        });
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            // Check if the form is valid
            if (!loginForm.checkValidity()) {
                // If invalid, prevent the form submission to allow the browser's validation to kick in
                event.preventDefault();
                return;
            }

            // If valid, proceed with navigation
            event.preventDefault(); // Prevent actual form submission
            window.location.href = 'index.html'; // Navigate to the home page
        });
    }
});

// Functionality for navigation to the sign-up page after clicking "Upload"
document.addEventListener('DOMContentLoaded', function () {
    const uploadButton = document.getElementById('upload');
    if (uploadButton) {
        uploadButton.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default form submission
            window.location.href = 'sign-up.html'; // Navigate to the sign-up page
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const submitButton = document.getElementById('contact');  // 'contact' is the id of your submit button

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent the default form submission behavior

            // Collect form data
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');

            // Check if the elements exist and then access their values
            if (name && email && message) {
                console.log('Form Submitted:', { name: name.value, email: email.value, message: message.value });

                // Display success message or alert
                alert('Message sent successfully! Redirecting to the homepage...');

                // After a short delay to show the alert, redirect to the main page
                setTimeout(function () {
                    window.location.href = 'index.html'; // Replace with your main page URL
                }, 1500); // Delay of 1.5 seconds for better user experience
            } else {
                console.error("Form fields are missing.");
            }
        });
    } else {
        console.error("Contact form not found.");
    }
});


document.querySelectorAll('video').forEach(function(video) {
    video.addEventListener('touchstart', function() {
        this.play(); // Play video on touch for mobile
    });
});




