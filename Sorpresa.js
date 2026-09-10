// Carta, regalo, video, vela y música
document.addEventListener("DOMContentLoaded", function () {
  const cajaRegalo = document.getElementById("cajaRegalo");
  const modalCarta = document.getElementById("modalCarta");
  const contenidoCarta = modalCarta.querySelector(".contenido-carta");
  const cerrarCarta = document.getElementById("cerrarCarta");
  const botonVideo = document.getElementById("botonVideo");
  const contenedorVideo = document.getElementById("contenedorVideo");
  const videoCumpleanos = document.getElementById("videoCumpleanos");
  const overlay = document.querySelector(".overlay");
  const soplido = document.getElementById("soplido");
  const cancion = document.getElementById("cancion");
  const llama = document.querySelector(".llama");

  function regaloEstaAbierto() {
    return modalCarta.getAttribute("aria-hidden") === "false"; 
  }

  // Confeti2.js consulta esta función para desactivar las fotos.
  window.regaloEstaAbierto = regaloEstaAbierto;

  function abrirRegalo() {
    if (regaloEstaAbierto()) return;

    videoCumpleanos.pause();
    videoCumpleanos.currentTime = 0;
    contenedorVideo.classList.remove("mostrar");
    botonVideo.hidden = false;

    modalCarta.style.display = "flex";
    modalCarta.setAttribute("aria-hidden", "false");
    document.body.classList.add("regalo-abierto");
    
    modalCarta.scrollTop = 0;

    requestAnimationFrame(function () {
      modalCarta.classList.add("activo");
    });
  }

  function cerrarRegalo() {
    videoCumpleanos.pause();
    videoCumpleanos.currentTime = 0;
    contenedorVideo.classList.remove("mostrar");
    botonVideo.hidden = false;

    modalCarta.classList.remove("activo");
    modalCarta.setAttribute("aria-hidden", "true");
    document.body.classList.remove("regalo-abierto");

    window.setTimeout(function () {
      if (!regaloEstaAbierto()) modalCarta.style.display = "none";
    }, 300);

    if (cancion && cancion.paused) {
      cancion.play().catch(function () {});
    }
  }

  cajaRegalo.addEventListener("click", function (evento) {
    evento.preventDefault();
    abrirRegalo();
  });

  cajaRegalo.addEventListener("keydown", function (evento) {
    if (evento.key === "Enter" || evento.key === " ") {
      evento.preventDefault();
      abrirRegalo();
    }
  });

  cerrarCarta.addEventListener("click", function (evento) {
    evento.preventDefault();
    evento.stopPropagation();
    cerrarRegalo();
  });

  contenidoCarta.addEventListener("click", function (evento) {
    evento.stopPropagation();
  });

  modalCarta.addEventListener("click", function (evento) {
    if (evento.target === modalCarta) cerrarRegalo();
  });

  document.addEventListener("keydown", function (evento) {
    if (evento.key === "Escape" && regaloEstaAbierto()) cerrarRegalo();
  });

botonVideo.addEventListener("click", function (evento) {
  evento.preventDefault();
  evento.stopPropagation();

  contenedorVideo.classList.add("mostrar");
  botonVideo.hidden = true;

  if (cancion) {
    cancion.pause();
  }

  setTimeout(function () {
    contenedorVideo.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });

    videoCumpleanos.play().catch(function () {});
  }, 100);
});

  videoCumpleanos.addEventListener("ended", function () {
    if (cancion) cancion.play().catch(function () {});
  });

  cancion.loop = true;

  llama.addEventListener("click", function () {
    soplido.currentTime = 0;
    soplido.play().catch(function () {});
    llama.style.animation = "apagar 0.5s forwards";

    window.setTimeout(function () {
      cancion.currentTime = 0;
      cancion.play().catch(function () {});
      overlay.classList.add("hidden");
    }, 1000);
  });
});
