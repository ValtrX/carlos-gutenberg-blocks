document.addEventListener('DOMContentLoaded', function() {
    const blocks = document.querySelectorAll('.cgb-floating-boxes-frontend');

    blocks.forEach(block => {
        const floatingBoxes = block.querySelectorAll('.cgb-floating-box');
        
        // Obtener valores de los data attributes del contenedor principal
        const parentElement = block.closest('[data-float-duration]');
        const floatDuration = parseInt(parentElement?.dataset.floatDuration || 18);
        const cycleDuration = parseInt(parentElement?.dataset.cycleDuration || 3);
        const floatDelay = parseInt(parentElement?.dataset.floatDelay || 2);
        const slideUpDuration = parseFloat(parentElement?.dataset.slideUpDuration || 1);
        const slideOutDuration = parseFloat(parentElement?.dataset.slideOutDuration || 1);

        // Debug
        console.log('Animation Settings:', {
            floatDuration,
            cycleDuration,
            floatDelay,
            slideUpDuration,
            slideOutDuration
        });

        // Aplicar variables CSS
        const container = block.querySelector('.cgb-group');
        if (container) {
            container.style.setProperty('--float-duration', `${floatDuration}s`);
            container.style.setProperty('--float-cycle-duration', `${cycleDuration}s`);
            container.style.setProperty('--float-delay', `${floatDelay}s`);
            container.style.setProperty('--slide-up-duration', `${slideUpDuration}s`);
            container.style.setProperty('--slide-out-duration', `${slideOutDuration}s`);
        }

        // Función para reiniciar animaciones
        const resetAnimations = () => {
            floatingBoxes.forEach(box => {
                box.classList.remove('animate');
                void box.offsetWidth; // Forzar reflow
                box.classList.add('animate');
            });
        };

        // Iniciar animaciones
        resetAnimations();

        // Calcular tiempo total de animación
        const totalAnimationTime = 
            (slideUpDuration * 1.8) + // Tiempo máximo de slide up (tercera caja)
            floatDelay +              // Tiempo de espera
            floatDuration +           // Duración del flotado
            slideOutDuration +        // Duración del slide out
            1;                        // Margen extra

        const totalTime = totalAnimationTime * 1000; // Convertir a milisegundos
        
        // Reiniciar animaciones periódicamente
        setInterval(resetAnimations, totalTime);
    });
});