// script.js

const mobileMenu = document.getElementById('menu-mobile');
const nav = document.getElementById('nav');

mobileMenu.addEventListener('click', () => {
  nav.classList.toggle('active');
});