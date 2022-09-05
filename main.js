let circleX = 500;
let circleY = 500;

// PASO 1 ::: DETECTAR EL NAVEGADOR
const elNavegadorEsCompatible = () => {
  if (
    navigator.userAgent.indexOf("Chrome") ||
    navigator.userAgent.indexOf("Edge") ||
    navigator.userAgent.indexOf("Safari")
  )
    return true;
  alert("El Navegador no es compatible con el Reconocimiento de voz");
  return false;
};
// PASO 2 ::: SI EL NAVEGADOR ES COMPATIBLE CONFIGURAR EL RECONOCIMIENTO DE VOZ
if (elNavegadorEsCompatible()) {
  // 2.1 Esta api tiene nombres distintos según el navegador porque aún está en fase experimental, por eso las listamos todas e instanciamos la primera que consiga
  const recognition = new (window.SpeechRecognition ||
    window.webkitSpeechRecognition ||
    window.mozSpeechRecognition ||
    window.msSpeechRecognition)();

  // 2.2 Definimos el idioma a escuchar https://en.wikipedia.org/wiki/Language_localisation#:~:text=Examples%20of%20language%20tags
  recognition.lang = "es-US";

  // 2.3 Configuramos que cuando termine de reconocer algo vuelva a escuchar
  recognition.onend = (event) => {
    recognition.start();
  };
  // 2.3 Pasamos la función que se llamará cuando haya un resultado del reconocimiento de voz
  recognition.onresult = (resultado) => {
    manejarResultado(resultado);
  };
  // 2.4 Empezamos a escuchar
  recognition.start();
}

// PASO 3 DEFINIMOS LA FUNCIÓN QUE MANEJARÁ RESULTADO DEL RECONOCIMIENTO DE VOZ
const manejarResultado = (resultado) => {
  if (resultado.results[0][0].transcript.toLowerCase().trim() == "derecha") {
    circleX += 20;
  } else if (
    resultado.results[0][0].transcript.toLowerCase().trim() == "izquierda"
  ) {
    circleX -= 20;
  } else if (
    resultado.results[0][0].transcript.toLowerCase().trim() == "arriba"
  ) {
    circleY -= 20;
  } else if (
    resultado.results[0][0].transcript.toLowerCase().trim() == "abajo"
  ) {
    circleY += 20;
  }
};
function setup() {
  createCanvas(windowWidth, windowHeight);
}
function draw() {
  background(220);
  ellipse(circleX, circleY, 50, 50);
}

function touchMoved(event) {
  console.log(event);
  circleX = mouseX;
  circleY = mouseY;
}
