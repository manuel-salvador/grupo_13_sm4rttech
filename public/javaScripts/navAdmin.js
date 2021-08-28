console.log('hola');

const titulo = document.querySelector('#titulo-principal');
const navLinks = document.querySelectorAll('.nav-link');
const leftNav = document.querySelector('.left');
const nav = document.querySelector('nav.admin');
const menu = document.querySelector('.burger-menu')
const subMenu = document.querySelector('.sub-menu')

menu.addEventListener('click', () => {
    titulo.classList.toggle('hideNav');
    menu.classList.toggle('girar');
    navLinks.forEach(link => {
        subMenu.classList.toggle('hideNav');
        leftNav.classList.toggle('closeNav');
        nav.classList.toggle('closeNav');
        link.classList.toggle('hideNav');
    });
})
