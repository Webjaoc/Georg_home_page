// Seleccionar los elementos
const hamburgerBtn = document.getElementById('hamburger-btn');
const sidebar = document.getElementById('sidebar');

// Añadir un event listener para abrir/cerrar el menú
hamburgerBtn.addEventListener('click', () => {
    sidebar.classList.toggle('open');
});
