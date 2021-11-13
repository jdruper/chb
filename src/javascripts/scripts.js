// Add your scripts here

let isMenuOpen = false;

function toggleMenu() {
  isMenuOpen = !isMenuOpen;
  const menu = document.querySelector('.mobile-menu');
  if (isMenuOpen) {
    menu.classList.add('mobile-menu-display');
    return;
  }
  menu.classList.remove('mobile-menu-display');
}

function copyMail() {
  navigator.clipboard.writeText('hola@hierbabuena.cr');
  document.querySelector('.copy-icon').classList.add('hide');
  document.querySelector('.success-icon').classList.remove('hide');
  setTimeout(() => {
    document.querySelector('.copy-icon').classList.remove('hide');
    document.querySelector('.success-icon').classList.add('hide');
    return true;
  }, 5000);
}

document
  .querySelectorAll('.mobile-menu-icon').forEach((menuIcon) => menuIcon.addEventListener('click', toggleMenu));

const copy = document.querySelector('.contacto__copy');
if (copy) {
  copy.addEventListener('click', copyMail);
}
