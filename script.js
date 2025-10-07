const menuToggle = document.getElementById('menu-toggle');
const menuClose = document.getElementById('menu-close');
const mobileMenu = document.getElementById('mobile-menu');
const menuOverlay = document.getElementById('menu-overlay');

function toggleMenu() {
    // Toggles the 'translate-x-full' class to slide the menu in/out
    mobileMenu.classList.toggle('translate-x-full');
    // Toggles the 'hidden' class on the overlay to show/hide the background dim
    menuOverlay.classList.toggle('hidden');
    
    // prevent body scrolling 
    document.body.classList.toggle('overflow-hidden');
}

menuToggle.addEventListener('click', toggleMenu);
menuClose.addEventListener('click', toggleMenu);
menuOverlay.addEventListener('click', toggleMenu); 