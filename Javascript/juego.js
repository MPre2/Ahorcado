//Objetos del HTML
document.querySelector("canvas");
document.getElementById("botonInicio");
document.getElementById("agregar-palabra").style.display = "none";
document.getElementById("nuevoJuego").style.display = "none";
document.getElementById("desistir").style.display = "none";
document.getElementById("volver").style.display = "none";

//Variables o selectores
let palabraSecreta = [
  "HELLO",
  "WELCOME",
  "ORACLE",
  "ALURA",
  "JAVASCRIPT",
  "CSS",
  "HTML",
  "BOOTSTRAP",
  "VUE",
  "REACT",
];
let palabra = "";
let tablero = document.getElementById("horca").getContext("2d");
let letras = [];
let errores = 8;

//Funcion para que el Id "agregar-palabra" aparezca en pantalla
function apareceAgregarPalabra() {
  document.getElementById("inicio-juego").style.display = "none";
  document.getElementById("agregar-palabra").style.display = "inline";
}

//Función para qeu el Id "inicio-juego" aparezca en pantalla
function apareceInicio() {
  document.getElementById("inicio-juego").style.display = "inline";
  document.getElementById("agregar-palabra").style.display = "none";
}

//Función para generar de manera aleatoria la palabra a descifrar
function palabraAleatoria() {
  palabra = palabraSecreta[Math.floor(Math.random() * palabraSecreta.length)];
}

//Funcion que comprueba el ingreso de la letra
function comprobarLetra(key) {
  let estado = false;
  if (
    (key >= 65 && letras.indexOf(key)) ||
    (key <= 90 && letras.indexOf(key))
  ) {
    letras.push(key);
    return estado;
  } else {
    estado = true;
    return estado;
  }
}

//Funcion que disminuye en 1 los errores que se pueden cometer
function anadirLetraIncorrecta() {
  errores -= 1;
}

//Funcion se realiza toda la accion del juego en si
function juego() {
  document.getElementById("inicio-juego").style.display = "none";
  document.getElementById("agregar-palabra").style.display = "none";
  document.getElementById("nuevoJuego").style.display = "inline";
  document.getElementById("desistir").style.display = "inline";
  document.getElementById("volver").style.display = "inline";
  //Escoje una palabra al azar
  palabraAleatoria();
  //Dibuja el tablero donde se va a dibujar el ahorcado
  dibujarCanvas();
  //Dibuja las lineas correspondietes al total de las letras de la palabra
  dibujarLinea();
  //Definimos variable para identificar la cantidad de aciertos
  let aciertos = 0;
  //Funcion que capta la letra ingresada por teclado
  document.onkeydown = (e) => {
    let letra = e.key.toUpperCase();
    if (comprobarLetra(letra) && palabra.includes(letra)) {
      for (let i = 0; i < palabra.length; i++) {
        if (palabra[i] === letra) {
          escribirLetraCorrecta(i);
          aciertos++;
          if (aciertos == palabra.length) {
            //Funcion para dibujar el mensaje de ganador en pantalla
            alert("Felicitaciones, has ganado");
            errores = 8;
          }
        }
      }
    } else {
      dibujo(errores);
      escribirLetraIncorrecta(letra, errores);
      anadirLetraIncorrecta();
      if (errores == 0) {
        //Funcion para dibujar por pantalla el mensaje de perdedor
        alert("Has perdido, la palabra era " + palabra);
        errores = 8;
      }
    }
  };
}

//Función para agregar una palabra a la lista predefinida
function agregarPalabra() {
  valor = "";
  valor = document.getElementById("ingresoPalabra").value;
  palabraSecreta.push(valor.toUpperCase());
  alert("La palabra a sido agregada exitosamente");
}

//Funcion que emite mensaje cuando el usuario desiste de continuar jugando
function desistir() {
  alert("Usted se ha dado por vencido, la palabra era: " + palabra);
}
