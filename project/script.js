// Toggle the navigation menu on smaller screens
function toggleMenu() {
    const menu = document.querySelector('.nav-links');
    menu.classList.toggle('active');
}

// Scroll to top button visibility and functionality
window.onscroll = function () {
    showBackToTopButton();
};

function showBackToTopButton() {
    const backToTopBtn = document.getElementById('back-to-top-btn');
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Smooth scroll when clicking on anchor links (works for internal navigation)
const scrollLinks = document.querySelectorAll('a[href^="#"]');
scrollLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Form validation for the Contact Us page
function validateForm() {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    
    // Check if name, email, and message are filled out
    if (name.value === "" || email.value === "" || message.value === "") {
        alert("All fields must be filled out!");
        return false; // Prevent form submission
    }

    // Check if email is valid
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email.value)) {
        alert("Please enter a valid email address!");
        return false;
    }

    return true; // Allow form submission
}

// Destination Gallery: Open image in full screen when clicked (optional)
document.querySelectorAll('.destination-card img').forEach(image => {
    image.addEventListener('click', function () {
        const fullImage = document.createElement('div');
        fullImage.classList.add('full-screen');
        fullImage.innerHTML = `<img src="${this.src}" alt="Destination" /><span class="close-btn">X</span>`;
        document.body.appendChild(fullImage);
        
        // Close full-screen view on click
        fullImage.querySelector('.close-btn').addEventListener('click', function () {
            fullImage.remove();
        });
    });
});
