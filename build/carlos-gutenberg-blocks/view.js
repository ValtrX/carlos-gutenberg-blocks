/******/ (() => { // webpackBootstrap
/*!*********************************************!*\
  !*** ./src/carlos-gutenberg-blocks/view.js ***!
  \*********************************************/
document.addEventListener('DOMContentLoaded', function () {
  const blocks = document.querySelectorAll('.cgb-floating-boxes-frontend');
  blocks.forEach(block => {
    const groups = block.querySelectorAll('.cgb-group');
    const parentElement = block.closest('[data-float-duration]');
    let currentGroupIndex = 0;

    // Obtener configuración de animación
    const floatDuration = parseInt(parentElement?.dataset.floatDuration || 18);
    const cycleDuration = parseInt(parentElement?.dataset.cycleDuration || 3);
    const floatDelay = parseInt(parentElement?.dataset.floatDelay || 2);
    const slideUpDuration = parseFloat(parentElement?.dataset.slideUpDuration || 1);
    const slideOutDuration = parseFloat(parentElement?.dataset.slideOutDuration || 1);

    // Función para cambiar entre grupos
    const switchGroup = () => {
      // Desactivar grupo actual
      groups[currentGroupIndex].classList.remove('active');

      // Cambiar al siguiente grupo
      currentGroupIndex = (currentGroupIndex + 1) % groups.length;

      // Activar nuevo grupo y sus animaciones
      const newGroup = groups[currentGroupIndex];
      newGroup.classList.add('active');

      // Reiniciar animaciones del nuevo grupo
      const boxes = newGroup.querySelectorAll('.cgb-floating-box');
      boxes.forEach(box => {
        box.classList.remove('animate');
        void box.offsetWidth; // Forzar reflow
        box.classList.add('animate');
      });
    };

    // Calcular tiempo total de animación
    const totalAnimationTime = slideUpDuration * 1.8 + floatDelay + floatDuration + slideOutDuration + 1;
    const totalTime = totalAnimationTime * 1000;

    // Iniciar animaciones del primer grupo
    const firstGroupBoxes = groups[0].querySelectorAll('.cgb-floating-box');
    firstGroupBoxes.forEach(box => box.classList.add('animate'));

    // Cambiar grupos periódicamente
    setInterval(switchGroup, totalTime);
  });
});
/******/ })()
;
//# sourceMappingURL=view.js.map