//funcion que aplica el estilo a la opcion seleccionada en el menu
function seleccionar(link){
    var opciones = document.querySelectorAll('#links a');
    opciones [0].className = "";
    opciones [1].className = "";
    opciones [2].className = "";
    opciones [3].className = "";
    opciones [4].className = "";
    link.className = "seleccionado";

    //hacemos desaparecer el menu una vez seleccionado una opcion
    var x = document.getElementById(nav);
    x.className ="";

}
//funcion que muestra el menu resposive
function resposiveMenu(){
    var x = document.getElementById("nav");
    if(x.className===""){
        x.className = "responsive";
    }else{
        x.className
    }
}

//aplicar la animacion en las barras
window.onscroll = function(){
    efectoHabilidades()
};

//funcion que aplica de la barra
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distencia_habilidades = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distencia_habilidades>=300){
        document.getElementById("html").classList.add(porcentaje-progreso1);
        document.getElementById("Javascript").classList.add(porcentaje-progreso2);
        document.getElementById("Canva").classList.add(porcentaje-progreso3);
        document.getElementById("Adobe Express").classList.add(porcentaje-progreso4);
        document.getElementById("Node JS").classList.add(porcentaje-progreso5);
        document.getElementById("Pyton").classList.add(porcentaje-progreso6);
        document.getElementById("MS Windows").classList.add(porcentaje-progreso7);
    }
}