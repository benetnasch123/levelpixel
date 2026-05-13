// Intersection Observer for fade-in animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-up, .step').forEach(el => observer.observe(el));

// Stagger benefit cards
document.querySelectorAll('.benefit-card').forEach((card, i) => {
  card.style.transitionDelay = (i * 0.07) + 's';
});

// Stagger portfolio items
document.querySelectorAll('.port-item').forEach((item, i) => {
  item.style.transitionDelay = (i * 0.1) + 's';
});

// Stagger steps
document.querySelectorAll('.step').forEach((step, i) => {
  step.style.transitionDelay = (i * 0.15) + 's';
});

// Nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    nav.style.padding = '12px 0';
    nav.style.background = 'rgba(8,10,15,0.96)';
  } else {
    nav.style.padding = '20px 0';
    nav.style.background = 'rgba(8,10,15,0.7)';
  }
});

// Hamburger menu
function toggleMenu() {
  const menu = document.getElementById('nav-mobile');
  menu.classList.toggle('open');
}

// Smooth anchor scrolls that account for nav height
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
    }
  });
});
