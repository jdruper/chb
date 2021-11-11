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

document
  .querySelectorAll('.mobile-menu-icon').forEach((menuIcon) => menuIcon.addEventListener('click', toggleMenu));
