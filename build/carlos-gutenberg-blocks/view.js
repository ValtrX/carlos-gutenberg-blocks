/******/ (() => { // webpackBootstrap
/*!*********************************************!*\
  !*** ./src/carlos-gutenberg-blocks/view.js ***!
  \*********************************************/
document.addEventListener('DOMContentLoaded', function () {
  const blocks = document.querySelectorAll('.wp-block-create-block-carlos-gutenberg-blocks');
  blocks.forEach(block => {
    const groups = block.querySelectorAll('.cgb-floating-boxes-frontend');
    const parentElement = block;
    let currentGroupIndex = 0;

    // Configuración de animación
    const floatDuration = parseInt(parentElement?.dataset.floatDuration || 18);
    const cycleDuration = parseInt(parentElement?.dataset.cycleDuration || 3);
    const floatDelay = parseInt(parentElement?.dataset.floatDelay || 2);
    const slideUpDuration = parseFloat(parentElement?.dataset.slideUpDuration || 1);
    const slideOutDuration = parseFloat(parentElement?.dataset.slideOutDuration || 1);

    // Función para animar un grupo
    const animateGroup = group => {
      const boxes = group.querySelectorAll('.cgb-floating-box');
      boxes.forEach(box => {
        box.classList.remove('animate');
        void box.offsetWidth; // Forzar reflow
        box.classList.add('animate');
      });
    };

    // Función para cambiar entre grupos
    const switchGroup = () => {
      // Desactivar grupo actual
      groups[currentGroupIndex].classList.remove('active');

      // Cambiar al siguiente grupo
      currentGroupIndex = (currentGroupIndex + 1) % groups.length;

      // Activar nuevo grupo y animar
      const newGroup = groups[currentGroupIndex];
      newGroup.classList.add('active');
      animateGroup(newGroup);
    };

    // Iniciar animaciones del primer grupo
    if (groups.length > 0) {
      const firstGroup = groups[0];
      firstGroup.classList.add('active');
      animateGroup(firstGroup);
    }

    // Calcular tiempo total de animación
    const totalAnimationTime = slideUpDuration * 1.8 + floatDelay + floatDuration + slideOutDuration + 1;
    const totalTime = totalAnimationTime * 1000;

    // Cambiar grupos periódicamente si hay más de un grupo
    if (groups.length > 1) {
      setInterval(switchGroup, totalTime);
    }
  });
});
/******/ })()
;
//# sourceMappingURL=view.js.map