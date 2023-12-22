$(() => {
  $("#es").on("click", idioma);
  $("#en").on("click", idioma);
  comprobarIdioma(); // Llamada inicial para comprobar el idioma al cargar la página
  cambiarFondo()
  comprobarIdioma()
});

const idioma = (e) => {
  let imagen = e.currentTarget;


  setTimeout(() => {
    comprobarIdioma()
    if (imagen.id == "es") {
      window.location.href = "index.html";
    } else {
      window.location.href = "indexEn.html";
    }
  }, 500);
};

const comprobarIdioma = () => {
  if ($("html").attr("lang")=="es") {
    $("#es").addClass("idioma-selected");
    $("#en").removeClass("idioma-selected");
  } else {
    $("#en").addClass("idioma-selected");
    $("#es").removeClass("idioma-selected");
  }
};

const cambiarFondo=()=>{
    setInterval(() => {
        $(".sobre-mi").toggleClass("fondo-azul");
        $(".about-me-btn").toggleClass("fondo-azul-btn");
    }, 6000);
}
  
