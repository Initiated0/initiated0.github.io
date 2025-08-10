// Minimal JS: responsive nav + footer year

// Toggle the mobile menu
(function navToggle(){
  const btn = document.querySelector('.nav__toggle');
  const list = document.getElementById('nav-menu');
  if (!btn || !list) return;
  btn.addEventListener('click', () => {
    const isOpen = list.classList.toggle('show');
    btn.setAttribute('aria-expanded', String(isOpen));
  });
})();

// Update the year in footer
(function year(){
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
