const nav__enlaces = document.querySelector('.nav__enlaces');
console.log(nav__enlaces);
const burgerButton = document.querySelector('#burger-menu');
console.log(burgerButton);

const imgBurger = document.querySelector('.Icono-burger');
console.log(imgBurger);

const imgClose = document.querySelector('.Icono-close');
console.log(imgClose);

burgerButton.addEventListener('click', hideShow);

function hideShow() {
    if(nav__enlaces.classList.contains('is-active') 
    && imgBurger.classList.contains('is-active')
    && imgClose.classList.contains('is-active')){

    nav__enlaces.classList.remove('is-active');
    imgBurger.classList.remove('is-active');
    imgClose.classList.remove('is-active');

    }else{
    nav__enlaces.classList.add('is-active');
    imgBurger.classList.add('is-active');
    imgClose.classList.add('is-active');
    }
}