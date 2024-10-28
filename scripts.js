// Smooth Scrolling for Internal Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    if (this.getAttribute('href') !== '#') {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth',
        });
      }
    }
  });
});

// Mobile Menu Toggle
document.addEventListener('alpine:init', () => {
  Alpine.data('mobileMenu', () => ({
    open: false,
  }));
});
