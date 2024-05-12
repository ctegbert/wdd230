// Get hamburger button and navigation menu
const hamburgerButton = document.getElementById('hamburgerButton');
const navMenu = document.querySelector('nav ul');

// Add click event listener to toggle menu visibility
hamburgerButton.addEventListener('click', function() {
    // Toggle 'open' class on navigation menu
    navMenu.classList.toggle('open');
});
