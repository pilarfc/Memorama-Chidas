var tablero = document.getElementById('tablero');
var cartas = [1, 2, 3, 4, 5, 6, 7, 8];
var parejas = cartas.length;
var primerCarta = 0;
var segundaCarta = 0;


cartas = cartas.concat(cartas);
cartas = cartas.sort(function() {
  return Math.random() - 0.5
});

cartas.forEach(function(val) {
  var div = document.createElement('div');
  var imagen = document.createElement('img');
  imagen.src = "img/" + ("imagen" + (val)) + ".jpg";
  imagen.className = "imagenCarta";
  div.id = val;
  div.className = "cartasConImagen"
  console.log(val);
  div.appendChild(imagen);
  tablero.appendChild(div);
  div.addEventListener('click', function(event) {
    var imagenSeleccionada = event.target;
    if (primerCarta !== 0 && segundaCarta !== 0) {
    // limpiar banderas
      if (primerCarta.id !== segundaCarta.id) {
        primerCarta.classList.remove('open');
        segundaCarta.classList.remove('open');
      };
      primerCarta = 0;
      segundaCarta = 0;
    };
    imagenSeleccionada.classList.add('open');
    if (primerCarta === 0) {
      primerCarta = imagenSeleccionada;
    } else {
      segundaCarta = imagenSeleccionada;
      if (primerCarta.id === segundaCarta.id) {
        parejas = parejas - 1;
        console.log(parejas);
      }
      if (parejas === 0) {
       alert('¡Ganaste!')
        location.reload();
      }
    }
        if (primerCarta === segundaCarta){
    };
  }, true)
});
