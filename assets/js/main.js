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
}

document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const app = document.querySelector('#app')?.value || '配管アプリ';
    const subject = encodeURIComponent(`【配管アプリサポート】${app}についてのお問い合わせ`);
    const name = document.querySelector('#name')?.value || '';
    const message = document.querySelector('#message')?.value || '';
    const body = encodeURIComponent(`お名前：${name}\n対象アプリ：${app}\n\nお問い合わせ内容：\n${message}`);
    const email = contactForm.dataset.email || 'support@example.com';
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  });
}
