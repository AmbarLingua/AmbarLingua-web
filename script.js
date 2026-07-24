// Scroll reveal
const obs = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) setTimeout(() => e.target.classList.add('v'), i * 65);
  });
}, { threshold: 0.07 });
document.querySelectorAll('.r').forEach(el => obs.observe(el));

// Nav active state
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 100) current = s.getAttribute('id');
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === `#${current}`
      ? 'var(--terra)' : '';
  });
});

// Mobile nav toggle
const burger = document.getElementById('navBurger');
const navMenu = document.querySelector('.nav-links');
if (burger) {
  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    navMenu.classList.toggle('open');
  });
  navMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      burger.classList.remove('open');
      navMenu.classList.remove('open');
    });
  });
}

// Lightbox — avatar nav
const avatarTrigger = document.getElementById('navAvatarTrigger');
const avatarLightbox = document.getElementById('avatarLightbox');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxBackdrop = document.querySelector('.lightbox-backdrop');

if (avatarTrigger && avatarLightbox) {
  avatarTrigger.addEventListener('click', (e) => {
    e.preventDefault();
    avatarLightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  });

  lightboxClose.addEventListener('click', () => {
    avatarLightbox.classList.remove('open');
    document.body.style.overflow = '';
  });

  lightboxBackdrop.addEventListener('click', () => {
    avatarLightbox.classList.remove('open');
    document.body.style.overflow = '';
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      avatarLightbox.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}
