let texto;
let resultcifrado;
let $taTexto;
let $btncopiar;

window.onload = function() {
    resultcifrado = document.getElementById("cifrado");
    resultcifrado.style.display = "none";
    $taTexto = document.querySelector("#texto");
    $btncopiar = document.getElementById("copiar");
    $btncopiar.style.display = "none ";
    console.log(resultcifrado);

}





function cifrar() {
    texto = document.getElementById("texto").value;
    if (texto == '') {
        swal("No hay texto para encriptar/descencriptar por favor ingresa uno");
        document.getElementById("ocultar").style.display = "block";
        $btncopiar.style.display = "none";
    } else {
        let resultado = texto;
        resultado = resultado.replace(/e/g, 'enter');  
        resultado = resultado.replace(/i/g, 'imes');
        resultado = resultado.replace(/a/g, 'ai');              
        resultado = resultado.replace(/o/g, 'ober');
        resultado = resultado.replace(/u/g, 'ufat');
        document.getElementById("ocultar").style.display = "none";
        document.getElementById("texto").value = '';
        resultcifrado.value = resultado;
        resultcifrado.style.display = "block";
        $btncopiar.style.display = "block";
        $taTexto.focus();

    }

}

function descifrar() {
    if (texto == '') {
        swal("No hay texto para encriptar/descencriptar por favor ingresa uno");
        document.getElementById("ocultar").style.display = "block";
        $btncopiar.style.display = "none";
    } else {
        texto = document.getElementById("texto").value;
        let resultado = texto;
        resultado = resultado.replace(/ai/g, 'a');
        resultado = resultado.replace(/imes/g, 'i');
        resultado = resultado.replace(/enter/g, 'e');       
        resultado = resultado.replace(/ober/g, 'o');
        resultado = resultado.replace(/ufat/g, 'u');
        document.getElementById("ocultar").style.display = "none";
        document.getElementById("texto").value = '';
        resultcifrado.value = resultado;
        resultcifrado.style.display = "block";
        $taTexto.focus();
    }


}

function copiar() {
    resultcifrado.select();
    document.execCommand('copy');
    swal("Texto Copiado");
}



function remplazar(elemento) {
    let texto = elemento.value
    texto = texto.split(/[^a-z\ \ñ]+/g)
    texto = texto.join("")
    elemento.value = texto
}