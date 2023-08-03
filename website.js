let menu = document.querySelector('#menu-icon');
let nav = document.querySelector('nav');

menu.onclick = () => {
    menu.classList.toggle('bx bx-menu');
    nav.classList.toggle('open');
}