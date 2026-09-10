// ==========================================
// CONFETI DELANTERO CON 35 FOTOS
// ==========================================

window.oncontextmenu = function () {
  return false;
};

// ========================================== 
// 1. CONFIGURACIÓN DEL CANVAS DELANTERO
// ==========================================

const canvasConfeti2 = document.getElementById("canvas2");
const ctxConfeti2 = canvasConfeti2.getContext("2d");

let ancho2 = window.innerWidth;
let alto2 = window.innerHeight;

canvasConfeti2.width = ancho2;
canvasConfeti2.height = alto2;

let confetis2 = [];
let fotosFlotantes2 = [];

let fotoSeleccionada2 = null;
let animacionPausada2 = false;

// ==========================================
// 2. COLORES DEL CONFETI
// ==========================================

const coloresConfeti2 = [
  "#a8172d",
  "#e08290",
  "#fbd0d6",
  "#f85d74",
  "#f6798b",
  "#eeaeb8",
  "#834e4e",
  "#ffffff",
  "#ffd700",
  "#9b5de5",
  "#00bbf9",
  "#00f5d4",
];

// ==========================================
// 3. TEXTOS DE LAS 35 FOTOS
// Puedes cambiar las oraciones.
// No borres las comillas ni las comas.
// ==========================================

const textosFotos2 = [
  "❤️ Feliz cumpleaños a la persona que hace mis días mucho más bonitos.",
  "🎂 Hoy celebro tu cumpleaños, pero también celebro la suerte de tenerte en mi vida.",
  "💕 Espero que la vida te regale tanta felicidad como la que tú me das.",
  "🌹 Eres una de las razones por las que sonrío incluso en los días difíciles.",
  "🥰 Gracias por llegar a mi vida y convertirte en alguien tan especial para mí.",
  "✨ Que este nuevo año de vida esté lleno de sueños cumplidos y momentos inolvidables.",
  " ❤️ No necesito un día especial para decirte cuánto te quiero, pero hoy quiero recordártelo más que nunca.",
  "🌷 Tu sonrisa es uno de mis lugares favoritos.",
  "💖 Si pudiera pedir un deseo hoy, pediría seguir compartiendo muchos cumpleaños contigo.",
  "🎉 Feliz cumpleaños, mi amor. Nunca dejes de ser esa persona hermosa que conquistó mi corazón.",
  "🫶 Gracias por cada abrazo, cada sonrisa y cada momento que hemos compartido.",
  "💗 Llegaste a mi vida sin avisar y terminaste ocupando un lugar enorme en mi corazón.",
  "🌙 Quiero estar contigo en tus días buenos, en los difíciles y en todos los que están por venir.",
  "❤️‍🩹 Tal vez no sea perfecto, pero lo que siento por ti es completamente sincero.",
  "🥺 Espero poder seguir viendo esa hermosa sonrisa durante muchos años.",
  "🌹 Hoy cumple años la niña que logró convertirse en alguien indispensable para mí.",
  "💕 De todas las casualidades de la vida, conocerte ha sido una de mis favoritas.",
  "🎂 No importa cuántos años cumplas, para mí siempre tendrás esa sonrisa que me enamora.",
  "🥰 Contigo aprendí que los momentos sencillos pueden convertirse en recuerdos inolvidables.",
  "💞 Quiero que hoy recuerdes lo valiosa, especial y maravillosa que eres.",
  "✨ Mereces cosas bonitas, porque tienes una manera muy bonita de iluminar mi vida.",
  "❤️ Si volviera a conocerte, volvería a elegir compartir mi tiempo contigo.",
  "🌸 Mi regalo favorito no está envuelto: es poder compartir otro cumpleaños a tu lado.",
  "💗 Gracias por escucharme, comprenderme y estar conmigo cuando más lo necesito.",
  "🫂 Quisiera darte un abrazo tan fuerte que pudiera decir todo lo que a veces no sé expresar con palabras.",
  "🌹 Nunca olvides que existe alguien que piensa en ti, se preocupa por ti y quiere verte feliz.",
  "💕 Verte feliz también me hace feliz.",
  "🥹 Ojalá pudiera guardar cada momento bonito contigo para volver a vivirlo cuando quisiera.",
  "❤️ Eres mi novia, pero también eres mi compañera, mi confianza y una persona muy importante para mí.",
  "🎂 Que cumplas muchos años más y que yo tenga la fortuna de seguir celebrándolos contigo.",
  "🌷 No sé qué nos depare el futuro, pero deseo que tenga muchos momentos juntos.",
  "💖 Gracias por hacer que mi corazón encuentre tranquilidad cuando estoy contigo.",
  "🥰 Hoy quiero consentirte, hacerte sonreír y recordarte lo mucho que significas para mí.",
  "✨ Entre millones de personas, qué bonito fue que nuestros caminos se encontraran.",
  "❤️ Feliz cumpleaños, mi amor. Te quiero muchísimo y deseo que este nuevo año de tu vida sea tan bonito como la felicidad que has traído a la mía.",
];

const pieDeFoto2 = "Te amo ❤️";

// ==========================================
// 4. CARGAR LAS 35 FOTOGRAFÍAS
// ==========================================

const imagenes2 = [];

for (let i = 1; i <= 35; i++) {
  const imagen = new Image();

  // foto1.jpg, foto2.jpg... foto35.jpg
  imagen.src = `./recursos/foto${i}.jpeg`;

  imagenes2.push(imagen);
}

// ==========================================
// 5. CREAR EL CONFETI
// ==========================================

function crearConfeti2() {
  confetis2 = [];

  const cantidadConfeti = 130;

  for (let i = 0; i < cantidadConfeti; i++) {
    confetis2.push({
      x: Math.random() * ancho2,
      y: Math.random() * -alto2,

      anchoPapel: Math.random() * 8 + 4,
      altoPapel: Math.random() * 12 + 5,

      color:
        coloresConfeti2[
          Math.floor(Math.random() * coloresConfeti2.length)
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
// 6. CREAR LAS 35 FOTOS FLOTANTES
// ==========================================

function crearFotosFlotantes2() {
  fotosFlotantes2 = [];

  for (let i = 0; i < imagenes2.length; i++) {
    fotosFlotantes2.push({
      indice: i,
      imagen: imagenes2[i],
      texto: textosFotos2[i],

      x: Math.random() * ancho2,
      y: Math.random() * -alto2,

      // Tamaño entre 55 y 80 píxeles
      tamano: Math.random() * 25 + 55,

      velocidadY: Math.random() * 0.7 + 0.4,
      velocidadX: Math.random() * 0.6 - 0.3,

      onda: Math.random() * Math.PI * 2,
      velocidadOnda:
        Math.random() * 0.025 + 0.01,

      // Se alternan las formas
      forma: i % 2 === 0
        ? "circulo"
        : "cuadrado",
    });
  }
}

// ==========================================
// 7. RECTÁNGULO CON ESQUINAS REDONDEADAS
// ==========================================

function rectanguloRedondeado2(
  x,
  y,
  width,
  height,
  radio
) {
  const r = Math.min(
    radio,
    width / 2,
    height / 2
  );

  ctxConfeti2.beginPath();
  ctxConfeti2.moveTo(x + r, y);
  ctxConfeti2.lineTo(x + width - r, y);

  ctxConfeti2.quadraticCurveTo(
    x + width,
    y,
    x + width,
    y + r
  );

  ctxConfeti2.lineTo(
    x + width,
    y + height - r
  );

  ctxConfeti2.quadraticCurveTo(
    x + width,
    y + height,
    x + width - r,
    y + height
  );

  ctxConfeti2.lineTo(x + r, y + height);

  ctxConfeti2.quadraticCurveTo(
    x,
    y + height,
    x,
    y + height - r
  );

  ctxConfeti2.lineTo(x, y + r);

  ctxConfeti2.quadraticCurveTo(
    x,
    y,
    x + r,
    y
  );

  ctxConfeti2.closePath();
}

// ==========================================
// 8. DIBUJAR IMAGEN SIN DEFORMAR
// ==========================================

function dibujarImagenCentrada2(
  imagen,
  x,
  y,
  anchoDestino,
  altoDestino
) {
  if (
    !imagen.complete ||
    imagen.naturalWidth === 0
  ) {
    return;
  }

  const anchoImagen = imagen.naturalWidth;
  const altoImagen = imagen.naturalHeight;

  const proporcionImagen =
    anchoImagen / altoImagen;

  const proporcionDestino =
    anchoDestino / altoDestino;

  let origenX = 0;
  let origenY = 0;
  let anchoRecorte = anchoImagen;
  let altoRecorte = altoImagen;

  if (proporcionImagen > proporcionDestino) {
    anchoRecorte =
      altoImagen * proporcionDestino;

    origenX =
      (anchoImagen - anchoRecorte) / 2;
  } else {
    altoRecorte =
      anchoImagen / proporcionDestino;

    origenY =
      (altoImagen - altoRecorte) / 2;
  }

  ctxConfeti2.drawImage(
    imagen,
    origenX,
    origenY,
    anchoRecorte,
    altoRecorte,
    x,
    y,
    anchoDestino,
    altoDestino
  );
}

// ==========================================
// 9. DIBUJAR UNA FOTO PEQUEÑA
// ==========================================

function dibujarFoto2(foto) {
  if (
    !foto.imagen.complete ||
    foto.imagen.naturalWidth === 0
  ) {
    return;
  }

  const mitad = foto.tamano / 2;

  ctxConfeti2.save();

  if (foto.forma === "circulo") {
    ctxConfeti2.beginPath();

    ctxConfeti2.arc(
      foto.x,
      foto.y,
      mitad,
      0,
      Math.PI * 2
    );

    ctxConfeti2.closePath();
  } else {
    rectanguloRedondeado2(
      foto.x - mitad,
      foto.y - mitad,
      foto.tamano,
      foto.tamano,
      8
    );
  }

  ctxConfeti2.clip();

  dibujarImagenCentrada2(
    foto.imagen,
    foto.x - mitad,
    foto.y - mitad,
    foto.tamano,
    foto.tamano
  );

  ctxConfeti2.restore();

  // Borde blanco
  ctxConfeti2.save();
  ctxConfeti2.strokeStyle = "#ffffff";
  ctxConfeti2.lineWidth = 4;

  if (foto.forma === "circulo") {
    ctxConfeti2.beginPath();

    ctxConfeti2.arc(
      foto.x,
      foto.y,
      mitad,
      0,
      Math.PI * 2
    );

    ctxConfeti2.closePath();
  } else {
    rectanguloRedondeado2(
      foto.x - mitad,
      foto.y - mitad,
      foto.tamano,
      foto.tamano,
      8
    );
  }

  ctxConfeti2.stroke();
  ctxConfeti2.restore();
}

// ==========================================
// 10. DIBUJAR Y MOVER EL CONFETI
// ==========================================

function dibujarConfetis2() {
  for (let i = 0; i < confetis2.length; i++) {
    const confeti = confetis2[i];

    ctxConfeti2.save();
    ctxConfeti2.translate(
      confeti.x,
      confeti.y
    );

    ctxConfeti2.rotate(confeti.rotacion);
    ctxConfeti2.fillStyle = confeti.color;

    ctxConfeti2.fillRect(
      -confeti.anchoPapel / 2,
      -confeti.altoPapel / 2,
      confeti.anchoPapel,
      confeti.altoPapel
    );

    ctxConfeti2.restore();

    if (!animacionPausada2) {
      confeti.y += confeti.velocidadY;
      confeti.x += confeti.velocidadX;

      confeti.rotacion +=
        confeti.velocidadRotacion;

      if (confeti.y > alto2 + 20) {
        confeti.y = -20;
        confeti.x = Math.random() * ancho2;
      }

      if (confeti.x > ancho2 + 20) {
        confeti.x = -20;
      }

      if (confeti.x < -20) {
        confeti.x = ancho2 + 20;
      }
    }
  }
}

// ==========================================
// 11. DIBUJAR Y MOVER LAS FOTOS
// ==========================================

function dibujarFotos2() {
  for (
    let i = 0;
    i < fotosFlotantes2.length;
    i++
  ) {
    const foto = fotosFlotantes2[i];

    dibujarFoto2(foto);

    if (!animacionPausada2) {
      foto.y += foto.velocidadY;
      foto.onda += foto.velocidadOnda;

      foto.x +=
        foto.velocidadX +
        Math.sin(foto.onda) * 0.25;

      // Si sale por abajo, vuelve arriba a aparecer arriba
      if (foto.y - foto.tamano > alto2) {
        foto.y = -foto.tamano;
        foto.x = Math.random() * ancho2;
      }

      if (foto.x > ancho2 + foto.tamano) {
        foto.x = -foto.tamano;
      }

      if (foto.x < -foto.tamano) {
        foto.x = ancho2 + foto.tamano;
      }
    }
  }
}

// ==========================================
// 12. DIVIDIR EL TEXTO EN VARIAS LÍNEAS
// ==========================================

function escribirTextoEnLineas2(
  texto,
  x,
  y,
  anchoMaximo,
  altoLinea,
  maximoLineas
) {
  const palabras = texto.split(" ");
  const lineas = [];

  let linea = "";

  for (let i = 0; i < palabras.length; i++) {
    const prueba =
      linea + palabras[i] + " ";

    const medida =
      ctxConfeti2.measureText(prueba);

    if (
      medida.width > anchoMaximo &&
      linea !== ""
    ) {
      lineas.push(linea.trim());
      linea = palabras[i] + " ";
    } else {
      linea = prueba;
    }
  }

  if (linea !== "") {
    lineas.push(linea.trim());
  }

  const lineasVisibles =
    lineas.slice(0, maximoLineas);

  for (
    let i = 0;
    i < lineasVisibles.length;
    i++
  ) {
    let textoLinea = lineasVisibles[i];

    if (
      i === maximoLineas - 1 &&
      lineas.length > maximoLineas
    ) {
      textoLinea += "...";
    }

    ctxConfeti2.fillText(
      textoLinea,
      x,
      y + i * altoLinea
    );
  }
}

// ==========================================
// 13. DIBUJAR LA FOTO GRANDE
// ==========================================

function dibujarFotoSeleccionada2() {
  if (!fotoSeleccionada2) {
    return;
  }

  // Fondo oscuro
  ctxConfeti2.fillStyle =
    "rgba(0, 0, 0, 0.82)";

  ctxConfeti2.fillRect(
    0,
    0,
    ancho2,
    alto2
  );

  const margen = 15;

  const anchoTarjeta = Math.min(
    380,
    ancho2 - margen * 2
  );

  const altoTarjeta = Math.min(
    570,
    alto2 - margen * 2
  );

  const tarjetaX =
    (ancho2 - anchoTarjeta) / 2;

  const tarjetaY =
    (alto2 - altoTarjeta) / 2;

  // Tarjeta blanca
  ctxConfeti2.save();
  ctxConfeti2.fillStyle = "#ffffff";
  ctxConfeti2.shadowColor =
    "rgba(0, 0, 0, 0.5)";

  ctxConfeti2.shadowBlur = 25;

  rectanguloRedondeado2(
    tarjetaX,
    tarjetaY,
    anchoTarjeta,
    altoTarjeta,
    22
  );

  ctxConfeti2.fill();
  ctxConfeti2.restore();

  // Tamaño de la fotografía grande
  const espacioTexto = 155;

  const tamanoFoto = Math.min(
    anchoTarjeta - 40,
    altoTarjeta - espacioTexto
  );

  const fotoX =
    tarjetaX +
    (anchoTarjeta - tamanoFoto) / 2;

  const fotoY = tarjetaY + 42;

  // Dibujar la foto grande
  ctxConfeti2.save();

  rectanguloRedondeado2(
    fotoX,
    fotoY,
    tamanoFoto,
    tamanoFoto,
    16
  );

  ctxConfeti2.clip();

  dibujarImagenCentrada2(
    fotoSeleccionada2.imagen,
    fotoX,
    fotoY,
    tamanoFoto,
    tamanoFoto
  );

  ctxConfeti2.restore();

  // Borde rosa
  ctxConfeti2.strokeStyle = "#ff4d6d";
  ctxConfeti2.lineWidth = 4;

  rectanguloRedondeado2(
    fotoX,
    fotoY,
    tamanoFoto,
    tamanoFoto,
    16
  );

  ctxConfeti2.stroke();

  // Oración de la foto
  ctxConfeti2.fillStyle = "#333333";
  ctxConfeti2.font = "17px Arial";
  ctxConfeti2.textAlign = "center";
  ctxConfeti2.textBaseline = "alphabetic";

  escribirTextoEnLineas2(
    fotoSeleccionada2.texto,
    ancho2 / 2,
    fotoY + tamanoFoto + 30,
    anchoTarjeta - 35,
    22,
    3
  );

  // Pie de foto
  ctxConfeti2.fillStyle = "#e91e63";

  ctxConfeti2.font =
    "27px Pacifico, cursive";

  ctxConfeti2.fillText(
    pieDeFoto2,
    ancho2 / 2,
    tarjetaY + altoTarjeta - 22
  );

  // Botón para cerrar
  const cerrarX =
    tarjetaX + anchoTarjeta - 24;

  const cerrarY = tarjetaY + 24;

  ctxConfeti2.fillStyle = "#ff4d6d";
  ctxConfeti2.beginPath();

  ctxConfeti2.arc(
    cerrarX,
    cerrarY,
    18,
    0,
    Math.PI * 2
  );

  ctxConfeti2.fill();

  ctxConfeti2.fillStyle = "#ffffff";
  ctxConfeti2.font = "bold 24px Arial";
  ctxConfeti2.textAlign = "center";
  ctxConfeti2.textBaseline = "middle";

  ctxConfeti2.fillText(
    "×",
    cerrarX,
    cerrarY + 1
  );
}

// ==========================================
// 14. DETECTAR SI SE PRESIONÓ UNA FOTO
// ==========================================

function fotoFuePresionada2(
  foto,
  mouseX,
  mouseY
) {
  const mitad = foto.tamano / 2;

  if (foto.forma === "circulo") {
    const distanciaX = mouseX - foto.x;
    const distanciaY = mouseY - foto.y;

    return (
      Math.sqrt(
        distanciaX * distanciaX +
        distanciaY * distanciaY
      ) <= mitad
    );
  }

  return (
    mouseX >= foto.x - mitad &&
    mouseX <= foto.x + mitad &&
    mouseY >= foto.y - mitad &&
    mouseY <= foto.y + mitad
  );
}

// ==========================================
// 15. DETECTAR CLIC EN LAS FOTOS
// ==========================================

document.addEventListener(
  "click",
  function (evento) {
    // Mientras la carta o el video estén abiertos, las fotos no reciben clics.
    // Es importante salir sin cancelar el evento para que el botón X funcione.
    if (
      typeof window.regaloEstaAbierto === "function" &&
      window.regaloEstaAbierto()
    ) {
      return;
    }

    const rectangulo =
      canvasConfeti2.getBoundingClientRect();

    const escalaX =
      canvasConfeti2.width / rectangulo.width;

    const escalaY =
      canvasConfeti2.height / rectangulo.height;

    const mouseX =
      (evento.clientX - rectangulo.left) *
      escalaX;

    const mouseY =
      (evento.clientY - rectangulo.top) *
      escalaY;

    // Si la foto grande está abierta,
    // cualquier clic la cierra
    if (fotoSeleccionada2) {
      evento.preventDefault();
      evento.stopPropagation();

      fotoSeleccionada2 = null;
      animacionPausada2 = false;

      return;
    }

    // La caja y la vela tienen prioridad aunque una foto pase por encima.
    if (
      evento.target instanceof Element &&
      evento.target.closest("#cajaRegalo, .llama")
    ) {
      return;
    }

    // Buscar si se presionó alguna fotografía
    for (
      let i = fotosFlotantes2.length - 1;
      i >= 0;
      i--
    ) {
      const foto = fotosFlotantes2[i];

      if (
        fotoFuePresionada2(
          foto,
          mouseX,
          mouseY
        )
      ) {
        evento.preventDefault();
        evento.stopPropagation();

        fotoSeleccionada2 = foto;
        animacionPausada2 = true;

        return;
      }
    }
  },
  true
);

// ==========================================
// 16. ANIMACIÓN PRINCIPAL
// ==========================================

function animarConfeti2() {
  // Limpiar para conservar el fondo transparente
  ctxConfeti2.clearRect(
    0,
    0,
    ancho2,
    alto2
  );

  dibujarConfetis2();
  dibujarFotos2();
  dibujarFotoSeleccionada2();

  requestAnimationFrame(animarConfeti2);
}

// ==========================================
// 17. AJUSTAR AL CAMBIAR LA PANTALLA
// ==========================================

window.addEventListener("resize", function () {
  ancho2 = window.innerWidth;
  alto2 = window.innerHeight;

  canvasConfeti2.width = ancho2;
  canvasConfeti2.height = alto2;
});

// ==========================================
// 18. INICIAR
// ==========================================

crearConfeti2();
crearFotosFlotantes2();

setTimeout(function () {
  animarConfeti2();
}, 1500);
