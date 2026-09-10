// ==========================================
// CONFETI DE ATRÁS CON FRASES DE CUMPLEAÑOS
// ==========================================

window.oncontextmenu = function () {
  return false;
};

// ==========================================
// 1. CONFIGURACIÓN DEL CANVAS DE ATRÁS 
// ==========================================

const canvasConfeti = document.getElementById("canvas1");
const ctxConfeti = canvasConfeti.getContext("2d");

let ancho = window.innerWidth;
let alto = window.innerHeight;

canvasConfeti.width = ancho;
canvasConfeti.height = alto;

let confetis = [];
let frasesFlotantes = [];

// ==========================================
// 2. COLORES DEL CONFETI
// ==========================================

const coloresConfeti = [
  "#8b0015",
  "#a4268d",
  "#fbd0d6",
  "#f85d74",
  "#f6798b",
  "#eeaeb8",
  "#ffffff",
  "#ffd700",
  "#ff4d6d",
  "#9b5de5",
  "#00bbf9",
  "#00f5d4",
];

// ==========================================
// 3. FRASES Y EMOJIS DE CUMPLEAÑOS
// Puedes cambiar o agregar más.
// ==========================================

const frasesCumpleanos = [
  "¡Feliz cumpleaños! 🎂",
  "Muchas felicidades 🎉",
  "Que cumplas muchos más 🥳",
  "Hoy es tu día especial 🎁",
  "Disfruta cada momento ✨",
  "Felicidades, hermosa 💖",
  "Que todos tus deseos se cumplan 🌟",
  "Un año más de alegría 🎊",
  "Sonríe, hoy es tu cumpleaños 😊",
  "Que nunca te falte amor ❤️",
  "Muchas bendiciones 🙏",
  "Celebremos tu vida 🎉",
  "Hoy todo es para ti 🎁",
  "Pide un deseo 🎂",
  "Brilla siempre ✨",
  "Te deseo mucha felicidad 💕",
  "Un día lleno de sorpresas 🎈",
  "Que seas muy feliz 🥰",
  "Feliz vuelta al sol ☀️",
  "Que comience la fiesta 🥳",
];

// Emojis individuales que también caerán
const emojisCumpleanos = [
  "🎂",
  "🎁",
  "🎉",
  "🎊",
  "🎈",
  "🥳",
  "💖",
  "❤️",
  "✨",
  "🌟",
  "🍰",
  "🧁",
];

// ==========================================
// 4. CREAR EL CONFETI
// ==========================================

function crearConfeti() {
  confetis = [];

  const cantidad = 120;

  for (let i = 0; i < cantidad; i++) {
    confetis.push({
      x: Math.random() * ancho,
      y: Math.random() * -alto,

      anchoPapel: Math.random() * 8 + 4,
      altoPapel: Math.random() * 12 + 5,

      color:
        coloresConfeti[
          Math.floor(Math.random() * coloresConfeti.length)
        ],

      velocidadY: Math.random() * 2 + 1,
      velocidadX: Math.random() - 0.5,

      rotacion: Math.random() * Math.PI * 2,
      velocidadRotacion:
        Math.random() * 0.15 - 0.075,
    });
  }
}

// ==========================================
// 5. CREAR LAS FRASES FLOTANTES
// ==========================================

function crearFrasesFlotantes() {
  frasesFlotantes = [];

  const cantidadFrases = 18;

  for (let i = 0; i < cantidadFrases; i++) {
    const mostrarEmoji = Math.random() < 0.35;

    const contenido = mostrarEmoji
      ? emojisCumpleanos[
          Math.floor(
            Math.random() * emojisCumpleanos.length
          )
        ]
      : frasesCumpleanos[
          Math.floor(
            Math.random() * frasesCumpleanos.length
          )
        ];

    frasesFlotantes.push({
      texto: contenido,
      esEmoji: mostrarEmoji,

      x: Math.random() * ancho,
      y: Math.random() * -alto,

      velocidadY: Math.random() * 0.6 + 0.35,
      velocidadX: Math.random() * 0.5 - 0.25,

      onda: Math.random() * Math.PI * 2,
      velocidadOnda:
        Math.random() * 0.02 + 0.008,

      tamano: mostrarEmoji
        ? Math.random() * 18 + 27
        : Math.random() * 5 + 16,

      color:
        coloresConfeti[
          Math.floor(Math.random() * coloresConfeti.length)
        ],

      sombra: Math.random() * 2 + 2,
    });
  }
}

// ==========================================
// 6. DIBUJAR Y MOVER EL CONFETI
// ==========================================

function dibujarConfeti() {
  for (let i = 0; i < confetis.length; i++) {
    const confeti = confetis[i];

    ctxConfeti.save();

    ctxConfeti.translate(
      confeti.x,
      confeti.y
    );

    ctxConfeti.rotate(confeti.rotacion);
    ctxConfeti.fillStyle = confeti.color;

    ctxConfeti.fillRect(
      -confeti.anchoPapel / 2,
      -confeti.altoPapel / 2,
      confeti.anchoPapel,
      confeti.altoPapel
    );

    ctxConfeti.restore();

    // Movimiento
    confeti.y += confeti.velocidadY;
    confeti.x += confeti.velocidadX;

    confeti.rotacion +=
      confeti.velocidadRotacion;

    // Volver a aparecer arriba
    if (confeti.y > alto + 20) {
      confeti.y = -20;
      confeti.x = Math.random() * ancho;
    }

    if (confeti.x > ancho + 20) {
      confeti.x = -20;
    }

    if (confeti.x < -20) {
      confeti.x = ancho + 20;
    }
  }
}

// ==========================================
// 7. DIBUJAR Y MOVER LAS FRASES
// ==========================================

function dibujarFrases() {
  for (
    let i = 0;
    i < frasesFlotantes.length;
    i++
  ) {
    const frase = frasesFlotantes[i];

    ctxConfeti.save();

    ctxConfeti.font = frase.esEmoji
      ? `${frase.tamano}px "Segoe UI Emoji", Arial`
      : `bold ${frase.tamano}px Arial`;

    ctxConfeti.textAlign = "center";
    ctxConfeti.textBaseline = "middle";

    // Sombra para que el texto pueda verse
    ctxConfeti.shadowColor =
      "rgba(0, 0, 0, 0.35)";

    ctxConfeti.shadowBlur = frase.sombra;
    ctxConfeti.shadowOffsetX = 1;
    ctxConfeti.shadowOffsetY = 2;

    ctxConfeti.fillStyle = frase.esEmoji
      ? "#ffffff"
      : frase.color;

    ctxConfeti.fillText(
      frase.texto,
      frase.x,
      frase.y
    );

    ctxConfeti.restore();

    // Movimiento hacia abajo
    frase.y += frase.velocidadY;
    frase.onda += frase.velocidadOnda;

    // Movimiento suave de izquierda a derecha
    frase.x +=
      frase.velocidadX +
      Math.sin(frase.onda) * 0.25;

    // Calcular el ancho aproximado del texto
    ctxConfeti.font = frase.esEmoji
      ? `${frase.tamano}px "Segoe UI Emoji", Arial`
      : `bold ${frase.tamano}px Arial`;

    const anchoTexto =
      ctxConfeti.measureText(frase.texto).width;

    // Si termina de caer, vuelve arriba
    if (frase.y > alto + 50) {
      frase.y = -50;

      frase.x =
        anchoTexto / 2 +
        Math.random() *
          Math.max(1, ancho - anchoTexto);

      frase.texto = frase.esEmoji
        ? emojisCumpleanos[
            Math.floor(
              Math.random() *
                emojisCumpleanos.length
            )
          ]
        : frasesCumpleanos[
            Math.floor(
              Math.random() *
                frasesCumpleanos.length
            )
          ];
    }

    // Evitar que el texto salga por los lados
    if (frase.x > ancho + anchoTexto / 2) {
      frase.x = -anchoTexto / 2;
    }

    if (frase.x < -anchoTexto / 2) {
      frase.x = ancho + anchoTexto / 2;
    }
  }
}

// ==========================================
// 8. ANIMACIÓN PRINCIPAL
// ==========================================

function animarConfeti() {
  // Fondo rosa pastel
  ctxConfeti.fillStyle =
    "rgba(255, 182, 193, 1)";

  ctxConfeti.fillRect(
    0,
    0,
    ancho,
    alto
  );

  // Confeti detrás
  dibujarConfeti();

  // Frases y emojis
  dibujarFrases();

  requestAnimationFrame(animarConfeti);
}

// ==========================================
// 9. AJUSTAR AL CAMBIAR EL TAMAÑO
// ==========================================

window.addEventListener("resize", function () {
  ancho = window.innerWidth;
  alto = window.innerHeight;

  canvasConfeti.width = ancho;
  canvasConfeti.height = alto;
});

// ==========================================
// 10. INICIAR LA ANIMACIÓN
// ==========================================

crearConfeti();
crearFrasesFlotantes();

setTimeout(function () {
  animarConfeti();
}, 1500);