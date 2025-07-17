const searchBarElement = document.querySelector('.search-bar');

searchBarElement.addEventListener('keydown', (event) => {
    if(event.key === 'Enter') {
        localStorage.setItem('search value', searchBarElement.value.toLowerCase());
        document.location.href = '../../../index.html';
    }
});