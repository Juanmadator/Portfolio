$(() => {
  $("#es").on("click", idioma);
  $("#en").on("click", idioma);
  comprobarIdioma(); // Llamada inicial para comprobar el idioma al cargar la página
  cambiarFondo();
  comprobarIdioma();
  animacionLinks();
});

const idioma = (e) => {
  let imagen = e.currentTarget;

  setTimeout(() => {
    comprobarIdioma();
    if (imagen.id == "es") {
      window.location.href = "index.html";
    } else {
      window.location.href = "indexEn.html";
    }
  }, 500);
};

const comprobarIdioma = () => {
  if ($("html").attr("lang") == "es") {
    $("#es").addClass("idioma-selected");
    $("#en").removeClass("idioma-selected");
  } else {
    $("#en").addClass("idioma-selected");
    $("#es").removeClass("idioma-selected");
  }
};

const cambiarFondo = () => {
  setInterval(() => {
    $(".sobre-mi").toggleClass("fondo-azul");
    $(".about-me-btn").toggleClass("fondo-azul-btn");
  }, 6000);
};

const mostrarIframe = (e) => {
  if ($(e).attr("id") == "proyecto1") {
    //en caso de querer hacer algo
  }
};

const animacionLinks = () => {
  const proyectos = document.querySelectorAll(".proyect");
  proyectos.forEach((proyecto) => {
    proyecto.addEventListener("click", function (event) {
      event.preventDefault();

      const targetPage = this.children[0].getAttribute("href");

      const sobreMiElement = document.querySelector(".sobre-mi");

      const backgroundColor = getComputedStyle(sobreMiElement).backgroundColor;

      const colorEsperado = "rgb(177, 107, 177)";

      if (backgroundColor === colorEsperado) {
        document.body.classList.add("page-transition-morado");
      } else {
        document.body.classList.add("page-transition-azulito");
      }
      setTimeout(function () {
        window.location.href = targetPage;
      }, 500);
    });
  });
};
