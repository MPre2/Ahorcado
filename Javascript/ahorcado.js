
//TRADUCIR TODO A VARIABLES PARA PODER REALIZAR EL DISEÑO RESPONSIVO DEL CANVAS


function dibujarCanvas() {
  tablero.lineWidth = 8;
  tablero.lineCap = "round";
  tablero.lineJoin = "round";
  tablero.fillStyle = "#F3F5F6";
  tablero.strokeStyle = "#0A3871";
  //Dibuja la base de la horca
  tablero.fillRect(0, 0, 1200, 800);
  tablero.beginPath();
  tablero.moveTo(600, 500);
  tablero.lineTo(900, 500);
  tablero.stroke();
  tablero.closePath();
}

function dibujarLinea() {
  tablero.lineWidth = 6;
  tablero.lineCap = "round";
  tablero.lineJoin = "round";
  tablero.fillStyle = "#F3F5F6";
  tablero.strokeStyle = "#0A3871";
  //Dibuja las lineas correspondientes a cada letra de la palabra
  let anchura = 600 / palabra.length;
  for (let i = 0; i < palabra.length; i++) {
    tablero.moveTo(500 + anchura * i, 640);
    tablero.lineTo(550 + anchura * i, 640);
  }
  tablero.stroke();
  tablero.closePath();
}

function dibujarMastil() {
  tablero.lineWidth = 6;
  tablero.lineCap = "round";
  tablero.lineJoin = "round";
  tablero.fillStyle = "#F3F5F6";
  tablero.strokeStyle = "#0A3871";
  //Dibujamos el mastil del Ahorcado
  tablero.beginPath();
  tablero.moveTo(700, 500);
  tablero.lineTo(700, 250);
  tablero.stroke();
  tablero.closePath();
}

function dibujarHorca() {
  tablero.lineWidth = 6;
  tablero.lineCap = "round";
  tablero.lineJoin = "round";
  tablero.fillStyle = "#F3F5F6";
  tablero.strokeStyle = "#0A3871";
  //Dibujamos la Horca
  tablero.beginPath();
  tablero.moveTo(700, 250);
  tablero.lineTo(810, 250);
  tablero.moveTo(810, 250);
  tablero.lineTo(810, 275);
  tablero.stroke();
  tablero.closePath();
}

function dibujarCabeza() {
  tablero.lineWidth = 6;
  tablero.lineCap = "round";
  tablero.lineJoin = "round";
  tablero.fillStyle = "darkblue";
  tablero.strokeStyle = "#0A3871";
  //Dibujamos la cabeza del Ahorcado
  tablero.beginPath();
  tablero.arc(810, 300, 25, 0, 2 * 3.14);
  tablero.fill();
  tablero.fillStyle = "rgb(243, 245, 252)";
  tablero.beginPath();
  tablero.arc(810, 300, 19, 0, 2 * 3.14);
  tablero.fill();
}

function dibujarCuerpo() {
  tablero.lineWidth = 6;
  tablero.lineCap = "round";
  tablero.lineJoin = "round";
  tablero.fillStyle = "#F3F5F6";
  tablero.strokeStyle = "#0A3871";
  //Dibujamos el cuerpo del Ahorcado
  tablero.beginPath();
  tablero.moveTo(810, 325);
  tablero.lineTo(810, 425);
  tablero.stroke();
  tablero.closePath();
}

function dibujarBrazoDerecho() {
  tablero.lineWidth = 6;
  tablero.lineCap = "round";
  tablero.lineJoin = "round";
  tablero.fillStyle = "#F3F5F6";
  tablero.strokeStyle = "#0A3871";
  //Dibujamos el brazo derecho del Ahorcado
  tablero.beginPath();
  tablero.moveTo(810, 335);
  tablero.lineTo(780, 385);
  tablero.stroke();
  tablero.closePath();
}

function dibujarBrazoIzquierdo() {
  tablero.lineWidth = 6;
  tablero.lineCap = "round";
  tablero.lineJoin = "round";
  tablero.fillStyle = "#F3F5F6";
  tablero.strokeStyle = "#0A3871";
  //Dibujamos el brazo izquierdo del ahorcado
  tablero.beginPath();
  tablero.moveTo(810, 335);
  tablero.lineTo(840, 385);
  tablero.stroke();
  tablero.closePath();
}

function dibujarPiernaDerecha() {
  tablero.lineWidth = 6;
  tablero.lineCap = "round";
  tablero.lineJoin = "round";
  tablero.fillStyle = "#F3F5F6";
  tablero.strokeStyle = "#0A3871";
  //Dibujamos la pierna derecha del Ahorcado
  tablero.beginPath();
  tablero.moveTo(810, 425);
  tablero.lineTo(780, 475);
  tablero.stroke();
  tablero.closePath();
}

function dibujarPiernaIzquierda() {
  tablero.lineWidth = 6;
  tablero.lineCap = "round";
  tablero.lineJoin = "round";
  tablero.fillStyle = "#F3F5F6";
  tablero.strokeStyle = "#0A3871";
  //Dibujamos la pierna izquierda del ahorcado
  tablero.beginPath();
  tablero.moveTo(810, 425);
  tablero.lineTo(840, 475);
  tablero.stroke();
  tablero.closePath();
}

function escribirLetraCorrecta(index) {
  tablero.font = "bold 52px inter";
  tablero.lineWidth = 6;
  tablero.lineCap = "round";
  tablero.lineJoin = "round";
  tablero.fillStyle = "darkblue";
  //Escribe las letras correctas de la palabra en su respectivo espacio en la pantalla
  let anchura = 600 / palabra.length;
  tablero.fillText(palabra[index], 505 + anchura * index, 620);
  //tablero.stroke();
}

function escribirLetraIncorrecta(letra, errorLeft) {
  tablero.font = "bold 40px inter";
  tablero.lineWidth = 6;
  tablero.lineCap = "round";
  tablero.lineJoin = "round";
  tablero.fillStyle = "darkblue";
  //Escribe las letras erradas en la pantalla
  let anchura = 600 / palabra.length;
  tablero.fillText(letra, 505 + 40 * (10 - errorLeft), 720, 40);
}

//Dibuja cada una de las partes del ahorcado
function dibujo(errados) {
  if (errados === 8) {
    dibujarMastil();
  }
  if (errados === 7) {
    dibujarHorca();
  }
  if (errados === 6) {
    dibujarCabeza();
  }
  if (errados === 5) {
    dibujarCuerpo();
  }
  if (errados === 4) {
    dibujarBrazoDerecho();
  }
  if (errados === 3) {
    dibujarBrazoIzquierdo();
  }
  if (errados === 2) {
    dibujarPiernaDerecha();
  }
  if (errados === 1) {
    dibujarPiernaIzquierda();
  }
}
