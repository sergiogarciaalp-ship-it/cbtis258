const cajas = document.querySelectorAll(".caja");

// Posiciones donde pueden estar (esquina sup izq, sup der, inf izq, inf der)
let posiciones = [
  { top: "0px", left: "0px" },
  { top: "0px", left: "180px" },
  { top: "180px", left: "0px" },
  { top: "180px", left: "180px" }
];

function colocar() {
  cajas.forEach((caja, i) => {
    caja.style.top = posiciones[i].top;
    caja.style.left = posiciones[i].left;
  });
}

function mezclar() {
  // Mezcla las posiciones aleatoriamente
  posiciones.sort(() => Math.random() - 0.5);
  colocar();
}

colocar(); // Coloca al inicio
setInterval(mezclar, 1500); // Cada 1.5 segundos cambian de lugar