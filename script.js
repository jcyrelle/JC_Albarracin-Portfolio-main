// ========== CARD HOVER LIFT ==========
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-4px)';
    card.style.transition = '0.3s ease';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
  });
});

// ========== FADE UP ON LOAD ==========
window.addEventListener("load", () => {
  document.querySelectorAll(".fade-up").forEach((el, i) => {
    el.style.animationDelay = `${i * 0.12}s`;
    el.classList.add("animate");
  });
});

// ========== AUTO-EXPAND TEXTAREA ==========
const textarea = document.querySelector(".contact-form textarea");

textarea.addEventListener("input", () => {
  textarea.style.height = "auto";
  textarea.style.height = textarea.scrollHeight + "px";
});

// ========== THEME TOGGLE ==========
const themeToggle = document.getElementById('themeToggle');
const body = document.documentElement;
const themeIcon = themeToggle.querySelector('i');

// Load saved theme preference (default: light)
const currentTheme = localStorage.getItem('theme') || 'light';
body.setAttribute('data-theme', currentTheme);

if (currentTheme === 'dark') {
  themeIcon.classList.remove('fa-sun');
  themeIcon.classList.add('fa-moon');
}

themeToggle.addEventListener('click', () => {
  const current = body.getAttribute('data-theme');
  const newTheme = current === 'light' ? 'dark' : 'light';

  body.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);

  if (newTheme === 'dark') {
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
  } else {
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
  }
});

// ========== CONTACT FORM ==========
const form = document.getElementById('contact-form');
const status = form.querySelector('.form-status');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  status.textContent = "Message sent! I'll get back to you soon.";
  form.reset();
  setTimeout(() => status.textContent = '', 4000);
});