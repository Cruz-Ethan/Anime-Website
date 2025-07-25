const switchModesButton = document.querySelector('.switch-modes-button');
switchModesButton.addEventListener('click', switchModes);
loadMode();

function switchModes() {
    document.body.classList.toggle('light-mode');
    if(localStorage.getItem('mode')) {
        localStorage.removeItem('mode');
        switchModesButton.innerHTML = 'Light Mode';
    }
    else {
        localStorage.setItem('mode', 'light mode');
        switchModesButton.innerHTML = 'Dark Mode';
    }
}

function loadMode() {
    if(localStorage.getItem('mode')) {
        document.body.classList.add('light-mode');
        switchModesButton.innerHTML = 'Dark Mode';
    }
}