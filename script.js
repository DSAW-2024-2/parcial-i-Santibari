const botonCompartir = document.querySelector('.boton-compartir');
const opcionesCompartir = document.querySelector('.opciones-compartir');

botonCompartir.addEventListener('click', () => {
  opcionesCompartir.style.display = opcionesCompartir.style.display === 'flex' ? 'none' : 'flex';
});
