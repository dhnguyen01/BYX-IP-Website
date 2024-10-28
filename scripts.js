// Custom Cursor
const cursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', (e) => {
  cursor.setAttribute("style", "top: " + e.pageY + "px; left: " + e.pageX + "px;");
});

document.addEventListener('click', () => {
  cursor.classList.add("expand");
  setTimeout(() => {
    cursor.classList.remove("expand");
  }, 500);
});

// Preloader
window.addEventListener('load', () => {
  document.getElementById('preloader').style.display = 'none';
});

// Navbar Background Change on Scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

mobileMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('is-active');
  navMenu.classList.toggle('active');
});

// Smooth Scrolling for Internal Links
document.querySelectorAll('.nav-link').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    if (this.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: 'smooth'
        });
        // Close mobile menu after clicking
        mobileMenu.classList.remove('is-active');
        navMenu.classList.remove('active');
      }
    }
  });
});

// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  // Implement form submission logic here
  alert('Thank you for your message!');
});

// Newsletter Form Submission
document.getElementById('newsletterForm').addEventListener('submit', function (e) {
  e.preventDefault();
  // Implement newsletter subscription logic here
  alert('Thank you for subscribing!');
});

// Initialize Owl Carousel
$('.artist-carousel').owlCarousel({
  loop: true,
  margin: 30,
  nav: true,
  navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
  dots: false,
  autoplay: true,
  autoplayTimeout: 5000,
  smartSpeed: 1000,
  responsive: {
    0: { items: 1 },
    768: { items: 2 },
    992: { items: 3 }
  }
});

// Parallax Effect Initialization
$(document).ready(function () {
  $('.parallax-section').parallax({ imageSrc: 'images/parallax.jpg' });
});
