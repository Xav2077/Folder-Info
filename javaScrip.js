document.addEventListener("DOMContentLoaded", function() {
    // Obtener referencias a los elementos relevantes
    let buttons = document.querySelectorAll('.tag');
    let toggles = document.querySelectorAll('.toggle');

    // Función para ocultar todos los toggles excepto el seleccionado
    function hideAllToggles(exceptToggle) {
        toggles.forEach(function(toggle) {
            if (toggle !== exceptToggle) {
                toggle.style.marginLeft = '-500px'; // Oculta el toggle
            }
        });
    }

    // Función para manejar el clic en el botón
    function handleButtonClick(event) {
        // Encuentra el índice del botón clicado
        let buttonIndex = Array.from(buttons).indexOf(event.target);

        // Encuentra el toggle correspondiente al botón
        let toggleToShow = toggles[buttonIndex];

        // Oculta todos los toggles excepto el seleccionado
        hideAllToggles(toggleToShow);

        // Muestra o oculta el toggle seleccionado
        if (toggleToShow.style.marginLeft === '-500px') {
            toggleToShow.style.marginLeft = '450px';
        } else {
            toggleToShow.style.marginLeft = '-500px';
        }
    }

    // Agrega un controlador de clic a cada botón
    buttons.forEach(function(button) {
        button.addEventListener('click', handleButtonClick);
    });
});
