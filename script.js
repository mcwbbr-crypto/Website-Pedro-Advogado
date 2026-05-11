const mobileMenu = document.getElementById('menu-mobile');
const nav = document.getElementById('nav');

if (mobileMenu && nav) {
  mobileMenu.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
}

// FECHAR MENU AO CLICAR EM UM LINK
const navLinks = document.querySelectorAll('.nav a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
  });
});

const form = document.getElementById('contact-form');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('close-popup');

if (form) {
  form.addEventListener('submit', async function(e) {
    e.preventDefault();

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        form.reset();
        popup.classList.add('active');
      } else {
        alert('Erro ao enviar. Verifique o FormSubmit.');
      }

    } catch (error) {
      alert('Erro ao enviar. Teste com o site publicado na Vercel.');
    }
  });
}

if (closePopup) {
  closePopup.addEventListener('click', () => {
    popup.classList.remove('active');
  });
}