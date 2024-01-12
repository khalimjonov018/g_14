const burger = document.querySelector('.burger');
const navbarList = document.querySelector('.navbar__list');
const logo = document.querySelector('.logo');

burger.addEventListener('click', () => {
    navbarList.classList.toggle('nav-left');
    
    if (navbarList.classList.contains('nav-left')) {
        setTimeout(() => {
            logo.style.paddingLeft = '30px';
        }, 200);
    }else {
        setTimeout(() => {
            logo.style.paddingLeft = '0px';
        }, 200);
    }
})