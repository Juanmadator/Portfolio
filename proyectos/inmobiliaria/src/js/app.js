window.addEventListener("DOMContentLoaded",function(){
eventListeners();
darkMode();
})


const darkMode=()=>{
    const botonDarkMode=document.querySelector(".dark-mode-boton");

    const preferenciaDarkMode=window.matchMedia("(prefers-color-scheme:dark)")

    if(preferenciaDarkMode){
        document.body.classList.add("dark-mode");
    }else{
        document.body.classList.remove("dark-mode")
    }

    preferenciaDarkMode.addEventListener("change",function(){
        if(preferenciaDarkMode.matches){
            document.body.classList.add("dark-mode");
        }else{
            document.body.classList.remove("dark-mode") 
        }
    });

    botonDarkMode.addEventListener("click",function(){
        document.body.classList.toggle("dark-mode")
    })
}

const eventListeners=()=>{
   const mobileMenu=document.querySelector(".mobile-menu");

   mobileMenu.addEventListener("click",navegacionResposive)
}


const navegacionResposive=()=>{
    const menu=document.querySelector(".navegacion");
    if(menu.classList.contains("mostrar")){
        menu.classList.remove("mostrar");
    }else{
        menu.classList.add("mostrar");
    }
}