document.addEventListener('DOMContentLoaded', function () {
    var menuItem = document.getElementById('menu-item'); // Selecciona el elemento del menú
    var menuToggle = document.getElementById('menu-toggle'); // Selecciona el enlace de toggle
    var toggleSymbol = menuToggle.querySelector('.toggle-symbol'); // Selecciona el símbolo +

    // Manejar el clic en el enlace de toggle (SERVICIOS)
    menuToggle.addEventListener('click', function(event) {
        if (window.innerWidth <= 768) { // Solo para pantallas pequeñas
            event.preventDefault(); // Prevenir la navegación para manejar el menú
            event.stopPropagation(); // Evitar la propagación

            // Alternar la visibilidad del submenú
            if (menuItem.classList.contains('active')) {
                menuItem.classList.remove('active');
                toggleSymbol.textContent = '+';
            } else {
                menuItem.classList.add('active');
                toggleSymbol.textContent = '-';
            }
        }
    });

    // Marcar la pestaña activa en el submenú y cerrar el menú al hacer clic en un enlace del submenú
    var submenuLinks = document.querySelectorAll('#menu-item .submenu a');
    submenuLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            if (window.innerWidth <= 768) { // Solo para pantallas pequeñas
                event.preventDefault(); // Prevenir la navegación para manejar el cierre del menú

                // Obtener el href del enlace y redirigir después de cerrar el menú
                var href = link.getAttribute('href');
                
                // Desmarcar todas las pestañas del submenú
                submenuLinks.forEach(function(subLink) {
                    subLink.classList.remove('activo');
                });

                // Marcar la pestaña actual como activa
                link.classList.add('activo');
                
                // Cerrar el submenú
                menuItem.classList.remove('active');
                toggleSymbol.textContent = '+';

                // Redirigir a la página después de un pequeño retraso
                setTimeout(function() {
                    window.location.href = href;
                }, 100); // Ajusta el tiempo si es necesario
            }
        });
    });

    // Cerrar el submenú al hacer clic fuera del menú (solo para pantallas pequeñas)
    document.addEventListener('click', function(event) {
        if (window.innerWidth <= 768) { // Solo para pantallas pequeñas
            if (!menuItem.contains(event.target) && menuItem.classList.contains('active')) {
                menuItem.classList.remove('active');
                toggleSymbol.textContent = '+'; // Cambiar el símbolo de vuelta a +
            }
        }
    });

    // Mostrar el submenú en pantallas grandes al pasar el ratón
    if (window.innerWidth > 768) {
        menuItem.addEventListener('mouseenter', function() {
            menuItem.classList.add('active');
        });

        menuItem.addEventListener('mouseleave', function() {
            menuItem.classList.remove('active');
        });
    }
});
