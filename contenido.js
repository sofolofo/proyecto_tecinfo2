document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-button');
    const vlogSections = document.querySelectorAll('.vlog-section');
    const actionButtons = document.querySelectorAll('.action-button');

    // Función para mostrar la sección activa
    const showSection = (targetId) => {
        vlogSections.forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(targetId).classList.add('active');
    };

    // Manejar clics en los botones de navegación
    navButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const targetId = event.target.dataset.target;
            showSection(targetId);

            // Actualizar el estado 'active' de los botones de navegación
            navButtons.forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
        });
    });

    // Manejar clics en los botones de acción
    actionButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const action = event.target.dataset.action;

            if (action === 'explore-more') {
                alert('¡Explorando más contenido verde! Redireccionando a la sección "Maravillas Naturales".');
                showSection('seccion-naturaleza');
                // Actualizar botón de navegación activo
                navButtons.forEach(btn => btn.classList.remove('active'));
                document.querySelector('.nav-button[data-target="seccion-naturaleza"]').classList.add('active');
            } else if (action === 'recycle-tips') {
                alert('¡Grandes consejos de reciclaje para ti! Preparando recursos...');
                // Aquí podrías, por ejemplo, desplegar un modal o ir a otra página con tips
                // Por ahora, solo una alerta.
            }
            // Agrega más acciones según tus necesidades
        });
    });

    // Manejar el envío del formulario de contacto (ejemplo básico)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevenir el envío por defecto del formulario
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const mensaje = document.getElementById('mensaje').value;

            // Aquí enviarías los datos a un servidor o a un servicio de correo electrónico
            console.log('Datos del formulario:', { nombre, email, mensaje });
            alert(`¡Gracias, ${nombre}! Tu mensaje ha sido enviado. Nos pondremos en contacto pronto.`);

            // Opcional: Limpiar el formulario
            contactForm.reset();
        });
    }

    // Inicializar la primera sección como activa al cargar la página
    showSection('seccion-intro');
});
