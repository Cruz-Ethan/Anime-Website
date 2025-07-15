const hamburgerMenuElement = document.querySelector('.hamburger-menu');
const closeButtonElement = document.querySelector('.close-icon-container');
const overlayElement = document.querySelector('.overlay');
const searchBarElement = document.querySelector('.search-bar');
const homeLinkElement = document.querySelector('.home-link');
const logoElement = document.querySelector('.logo');

hamburgerMenuElement.addEventListener('click', showMenu);
closeButtonElement.addEventListener('click', hideMenu);
overlayElement.addEventListener('click', hideMenu);

function showMenu() {
    document.body.classList.add('show-menu');
}

function hideMenu() {
    document.body.classList.remove('show-menu');
}

homeLinkElement.addEventListener('click', () => {
    localStorage.removeItem('search value');
});

logoElement.addEventListener('click', () => {
    localStorage.removeItem('search value');
})