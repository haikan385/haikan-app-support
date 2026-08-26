const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      nav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.focus();
    }
  });
}

document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
