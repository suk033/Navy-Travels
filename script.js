const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');
const header = document.querySelector('.site-header');

function closeMenu() {
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('menu-open');
}

menuButton.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  document.body.classList.toggle('menu-open', isOpen);
});

navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

window.addEventListener(
  'scroll',
  () => header.classList.toggle('scrolled', window.scrollY > 24),
  { passive: true }
);

const form = document.querySelector('#quote-form');
const status = document.querySelector('#form-status');
const dateInput = document.querySelector('#date');

// Establecer como fecha mínima el día actual
const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0');
const day = String(today.getDate()).padStart(2, '0');

dateInput.min = `${year}-${month}-${day}`;

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const requiredFields = [...form.querySelectorAll('[required]')];

  requiredFields.forEach((field) => {
    field.setAttribute('aria-invalid', String(!field.checkValidity()));
  });

  if (!form.checkValidity()) {
    status.textContent = 'Revisa los campos obligatorios antes de continuar.';
    form.querySelector(':invalid').focus();
    return;
  }

  status.textContent = '';

  const data = new FormData(form);

  const lines = [
    'Hola Navy Travels, quiero solicitar una cotización:',
    `Servicio: ${data.get('service')}`,
    `Nombre: ${data.get('name')}`,
    `WhatsApp: ${data.get('phone')}`,
    `Correo: ${data.get('email')}`,
    `Destino: ${data.get('destination')}`,
    `Fecha aproximada: ${data.get('date') || 'Por definir'}`,
    `Pasajeros: ${data.get('travelers')}`,
    `Comentario: ${data.get('message') || 'Sin comentarios adicionales'}`,
  ];

  window.open(
    `https://wa.me/51984019571?text=${encodeURIComponent(lines.join('\n'))}`,
    '_blank',
    'noopener,noreferrer'
  );

  status.textContent = 'Tu solicitud está lista en WhatsApp.';
});

form.addEventListener('input', (event) => {
  if (event.target.matches('[required]')) {
    event.target.removeAttribute('aria-invalid');
  }
});

document.querySelector('#year').textContent = new Date().getFullYear();