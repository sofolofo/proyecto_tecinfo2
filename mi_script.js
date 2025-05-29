document.addEventListener('DOMContentLoaded', () => {
    const botonInteractiva = document.getElementById('miBotonInteractiva');

    botonInteractiva.addEventListener('click', () => {
        alert('¡Gracias por hacer clic! Esto es un mensaje interactivo de EcoPower.');
        // Aquí puedes agregar más interactividad, como cambiar el texto, mostrar un elemento, etc.
        // Por ejemplo:
        // botonInteractiva.textContent = '¡Clickeado!';
        // botonInteractiva.style.backgroundColor = '#28a745'; // Cambiar a verde
    });
});
