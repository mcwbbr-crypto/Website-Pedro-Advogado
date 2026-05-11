// MENU MOBILE

const mobileMenu = document.getElementById('menu-mobile');
const nav = document.getElementById('nav');

mobileMenu.addEventListener('click', () => {
  nav.classList.toggle('active');
});


// FORMULÁRIO WHATSAPP

const form = document.getElementById('contact-form');

form.addEventListener('submit', function(e){

  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const telefone = document.getElementById('telefone').value;
  const mensagem = document.getElementById('mensagem').value;

  const texto = `
Olá, gostaria de entrar em contato.

*Nome:* ${nome}
*E-mail:* ${email}
*Telefone:* ${telefone}

*Mensagem:*
${mensagem}
  `;

  const numero = '5541999214387';

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

  window.open(url, '_blank');

});