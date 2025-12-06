// Mobile menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
hamburger?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form handling
const form = document.getElementById('contactForm');
const statusEl = document.getElementById('formStatus');

form?.addEventListener('submit', async (e) => {
  e.preventDefault();

  // Honeypot check
  const botField = document.getElementById('website');
  if (botField && botField.value.trim() !== '') return;

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    statusEl.textContent = 'Please fill all fields.';
    statusEl.style.color = '#dc2626';
    return;
  }

  // Default: open the user's email client
  window.location.href =
    `mailto:hello@dvn.org?subject=DVN%20Contact%20from%20${encodeURIComponent(name)}&body=${
      encodeURIComponent(message + '\n\nReply to: ' + email)
    }`;

  // If you later add a real API, replace the above with fetch() and show success/error.
});
