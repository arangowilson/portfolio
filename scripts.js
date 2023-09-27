
// Función para cambiar el color de los enlaces del menú al pasar el cursor
document.addEventListener('DOMContentLoaded', function () {
    const menuLinks = document.querySelectorAll('nav ul li a');

    menuLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = '#FFD700';  // Cambiar el color al pasar el cursor
        });

        link.addEventListener('mouseout', () => {
            link.style.color = '';  // Restaurar el color original al quitar el cursor
        });
    });
});
