var botonEncriptar = document.querySelector(".boton-encriptar");
var botonDesencriptar = document.querySelector(".boton-desencriptador");
var muneco = document.querySelector(".contenedor-muñeco");
var h3 = document.querySelector(".contenedor-h3");
var parrafo = document.querySelector(".contenedor-parrafo");
var resultado = document.querySelector(".texto-resultado");


botonEncriptar.onclick = Encriptar;
botonDesencriptar.onclick= desencriptador;

function Encriptar(){
    ocultarAdelante();
    var area = recuperarTexto();
    resultado.textContent = encriptarTexto(area)

}

function desencriptador(){
    ocultarAdelante();
    var area = recuperarTexto();
    resultado.textContent = desencriptarTexto(area)

}

function recuperarTexto(){
    var area = document.querySelector(".area");
    return area.value;
}



function ocultarAdelante(){
    muneco.classList.add("ocultar");
    h3.classList.add("ocultar");
    parrafo.classList.add("ocultar");
}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i=0;i < texto.length;i++){
        if(texto[i]=="a"){
            textoFinal = textoFinal + "ai";
        }
        else if(texto[i]=="e"){
            textoFinal = textoFinal + "enter";
        }
        else if(texto[i]=="i"){
            textoFinal = textoFinal + "imes";
        }
        else if(texto[i]=="o"){
            textoFinal = textoFinal + "ober";
        }
        else if(texto[i]=="u"){
            textoFinal = textoFinal + "ufat";
        }
        else {
            textoFinal = textoFinal + texto[i];
        }
    }

    return textoFinal;
}


function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    
    for(var i=0;i < texto.length;i++){
        if(texto[i]=="a"){
            textoFinal = textoFinal + "a";
            i +=1;
        }
        else if(texto[i]=="e"){
            textoFinal = textoFinal + "e";
            i +=4;
        }
        else if(texto[i]=="i"){
            textoFinal = textoFinal + "i";
            i += 3;
        }
        else if(texto[i]=="o"){
            textoFinal = textoFinal + "o";
            i += 3;
        }
        else if(texto[i]=="u"){
            textoFinal = textoFinal + "u";
            i += 3;
        }
        else {
            textoFinal = textoFinal + texto[i];
        }
    }

    return textoFinal;
}