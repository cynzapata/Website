//This class is a custom javascript file that contains script for the sidebar menu 
let menu = document.querySelector('#menu-icon');
let nav = document.querySelector('.nav');

//When the sidebar menu icon is clicked, the list of websites will open
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('open');
};