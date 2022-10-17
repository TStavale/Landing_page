const buttonMenu = document.getElementById('buttonMenu');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.prventDefaul()
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}



buttonMenu.addEventListener('click', toggleMenu);
buttonMenu.addEventListener('touchstart', toggleMenu);