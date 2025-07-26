const switchModesButton = document.querySelector('.switch-modes-button');

// adds button functionality and loads mode from storage
export function addLightModeFunctionality() {
    switchModesButton.addEventListener('click', switchModes);
    loadMode();
};

export default addLightModeFunctionality;

// toogles light mode
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

// load from local storage
function loadMode() {
    if(localStorage.getItem('mode')) {
        document.body.classList.add('light-mode');
        switchModesButton.innerHTML = 'Dark Mode';
    }
}