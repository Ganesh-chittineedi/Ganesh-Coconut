// Mobile menu toggle
const toggle = document.getElementById('menuToggle');
const links = document.getElementById('navLinks');

toggle.addEventListener('click', () => {
  links.classList.toggle('open');
});

// Close menu after clicking a link
links.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => links.classList.remove('open'));
});

// Auto-update footer year
document.getElementById('year').textContent = new Date().getFullYear();
