// Theme Toggle
const toggleTheme = () => {
  const root = document.documentElement;
  const currentTheme = root.getAttribute('data-theme') || 'dark';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', newTheme);
  document.querySelectorAll('.theme-icon').forEach(icon => {
    icon.textContent = newTheme === 'dark' ? '🌙' : '☀️';
  });
  localStorage.setItem('theme', newTheme);
};

// Initialize theme from localStorage
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  document.querySelectorAll('.theme-icon').forEach(icon => {
    icon.textContent = savedTheme === 'dark' ? '🌙' : '☀️';
  });
});

// Theme toggle buttons
document.getElementById('theme-toggle')?.addEventListener('click', toggleTheme);
document.getElementById('mobile-theme-toggle')?.addEventListener('click', toggleTheme);

// Hamburger Menu
function toggleMenu() {
  const menu = document.querySelector('.menu-links');
  const icon = document.querySelector('.hamburger-icon');
  menu.classList.toggle('open');
  icon.classList.toggle('open');
  menu.setAttribute('aria-expanded', menu.classList.contains('open'));
}

// Keyboard support for hamburger menu
document.querySelector('.hamburger-icon').addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    toggleMenu();
  }
});

// Scroll Animations
const animateOnScroll = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right').forEach(element => {
    observer.observe(element);
  });
};

document.addEventListener('DOMContentLoaded', animateOnScroll);