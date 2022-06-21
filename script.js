function Encriptar(){
    var texto = document.getElementById("inputText").value.toLowerCase();
    var txtcifrado = texto.replace(/e/igm, "enter");
    var txtcifrado = txtcifrado.replace(/o/igm, "ober");
    var txtcifrado = txtcifrado.replace(/i/igm, "imes");
    var txtcifrado = txtcifrado.replace(/a/igm, "ai");
    var txtcifrado = txtcifrado.replace(/u/igm, "ufat");

    document.getElementById("imagenref").style.display = "none";
    document.getElementById("imagenref1").style.display = "show";
    document.getElementById("imagenref1").style.display = "inherit";
    document.getElementById("tituloimg").style.display = "none";
    document.getElementById("textoinferior").innerHTML = txtcifrado;
    document.getElementById("Copiar").style.display = "show";
    document.getElementById("Copiar").style.display = "inherit";
}

function Desencriptar(){
    var texto = document.getElementById("inputText").value.toLowerCase();
    var txtcifrado = texto.replace(/enter/igm, "e");
    var txtcifrado = txtcifrado.replace(/ober/igm, "o");
    var txtcifrado = txtcifrado.replace(/imes/igm, "i");
    var txtcifrado = txtcifrado.replace(/ai/igm, "a");
    var txtcifrado = txtcifrado.replace(/ufat/igm, "u");

    document.getElementById("imagenref").style.display = "show";
    document.getElementById("imagenref").style.display = "inherit"
    document.getElementById("imagenref1").style.display = "none";
    document.getElementById("tituloimg").style.display = "none";
    document.getElementById("textoinferior").innerHTML = txtcifrado;
    document.getElementById("Copiar").style.display = "show";
    document.getElementById("Copiar").style.display = "inherit";
}

function copiar(){
    var contenido = document.querySelector("#textoinferior").value;
    navigator.clipboard.writeText(contenido);
    alert("Texto Copiado");
}