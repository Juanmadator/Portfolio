const { src, dest, watch, parallel } = require('gulp');

//CSS
const sass = require("gulp-sass")(require("sass"));
const plumber = require("gulp-plumber");

//npm i --save-dev cssnano autoprefixer postcss gulp-postcss
const autoprefixer=require('autoprefixer');
const cssnano=require('cssnano');
const postcss=require('gulp-postcss');
const sourcemaps=require('gulp-sourcemaps');


//JAVASCRIPT
//comprime el codigo de javascirpt y lo mejora
const terser=require('gulp-terser-js');



//IMAGENES
const cache=require('gulp-cache');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const avif = require('gulp-avif');

function css(done) {
  //de izuqierda a derecha realiza las acciones en cadena
  src("src/scss/**/*.scss")
  .pipe(sourcemaps.init())
  .pipe(plumber())
  .pipe(sass())
  //minifica el codigo
  .pipe(postcss([autoprefixer(),cssnano()]))
  .pipe(sourcemaps.write('.'))
  .pipe(dest("build/css")); //compilamos el archivo sass y lo guardamos en una ruta

  done(); //Callback que avisa a gulp de que ha finalizado la tarea
}

function imagenes(done){
    const opciones = {
      optimizationLevel: 3
    }

    src("src/img/**/*.{png,jpg}")
    .pipe(cache(imagemin(opciones)))
    .pipe(dest('build/img'))
    done();
}

function versionWebp(done) {
  const opciones = {
    quality: 50,
  };
//cambiamos las imagenes que terminen por png o jgp por webp a calidad de 50
  src("src/img/**/*.{png,jpg}").pipe(webp(opciones)).pipe(dest("build/img"));

  //indica que ya ha terminado
  done();
}

function versionAvif(done) {
    const opciones = {
      quality: 50,
    };
  //cambiamos las imagenes que terminen por png o jgp por avif a calidad de 50
    src("src/img/**/*.{png,jpg}").pipe(avif(opciones)).pipe(dest("build/img"));
  
    //indica que ya ha terminado
    done();
  }


  function javascript(done){
//esto es para que lo lleve a build
    src('src/js/**/*.js')
      //minifica el codigo
      .pipe(sourcemaps.init())
    .pipe(terser())
    .pipe(sourcemaps.write('.'))
    .pipe(dest('build/js'));
    done();
  }

function dev(done) {
  //con los asteriscos decimos que se compilen todos los archivos con extension scss
  watch("src/scss/**/*.scss", css);
  watch("src/js/**/*.js", javascript);
  //cuando halla una modificacion en la hoja scss , se llama a la funcion css
  //que compila la hoja scss en css
  done();
}

exports.css = css;
exports.imagenes=imagenes;
exports.versionWebp=versionWebp;
exports.versionAvif=versionAvif;
exports.javascript=javascript;
//ejecuta ambas en paralelo
exports.dev = parallel(imagenes,versionWebp,versionAvif,dev,javascript);
