const hamburgerMenuElement = document.querySelector('.hamburger-menu');
const closeButtonElement = document.querySelector('.close-icon-container');
const overlayElement = document.querySelector('.overlay');
const homeLinkElement = document.querySelector('.home-link');
const logoElement = document.querySelector('.logo');

export function addHeaderFunctionality() {
    hamburgerMenuElement.addEventListener('click', showMenu);
    closeButtonElement.addEventListener('click', hideMenu);
    overlayElement.addEventListener('click', hideMenu);
    homeLinkElement.addEventListener('click', removeSearchValue);
    logoElement.addEventListener('click', removeSearchValue);
};

export default addHeaderFunctionality;

function showMenu() {
    document.body.classList.add('show-menu');
}

function hideMenu() {
    document.body.classList.remove('show-menu');
}

function removeSearchValue() {
    localStorage.removeItem('search value');
}