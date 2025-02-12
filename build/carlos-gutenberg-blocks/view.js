/******/ (() => { // webpackBootstrap
/*!*********************************************!*\
  !*** ./src/carlos-gutenberg-blocks/view.js ***!
  \*********************************************/
document.addEventListener('DOMContentLoaded', function () {
  // Seleccionamos específicamente los bloques del frontend
  const blocks = document.querySelectorAll('.cgb-floating-boxes-frontend');
  blocks.forEach(block => {
    const floatingBoxes = block.querySelectorAll('.cgb-floating-box');
    const floatDuration = parseInt(block.dataset.floatDuration || 18);
    const cycleDuration = parseInt(block.dataset.cycleDuration || 3);
    const spacing = parseInt(block.dataset.spacing || 20);

    // Inicializar animaciones
    block.style.setProperty('--total-duration', `${floatDuration}s`);
    block.style.setProperty('--cycle-duration', `${cycleDuration}s`);
    block.style.setProperty('--spacing', `${spacing}px`);

    // Añadir clase para iniciar animaciones solo en el frontend
    floatingBoxes.forEach(box => {
      box.classList.add('animate');
    });
  });
});
/******/ })()
;
//# sourceMappingURL=view.js.map