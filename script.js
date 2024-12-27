let isOpen = false;

function toggleCover() {
  const cover = document.querySelector('.cover');
  const paper = document.querySelector('.paper');

  if (isOpen) {
    // Cierra la carta
    paper.classList.remove('open-paper');
    paper.classList.add('close-paper');

    setTimeout(() => {
      // Cambia z-index de la tapa después de que la carta haya terminado de bajar
      cover.style.zIndex = 1;
      cover.classList.remove('open-cover');
      cover.classList.add('close-cover');
    }, 500); // Coincide con la duración de la animación de la carta
  } else {
    // Abre la tapa
    cover.classList.add('open-cover');
    cover.classList.remove('close-cover');

    setTimeout(() => {
      // Cambia z-index de la tapa después de que se abre
      cover.style.zIndex = -1;
      // Inicia la animación de la carta
      paper.classList.add('open-paper');
      paper.classList.remove('close-paper');
    }, 750); // Ajusta este tiempo a la duración de la animación de la tapa
  }

  isOpen = !isOpen;
}

document.querySelector('main').addEventListener('click', toggleCover);
