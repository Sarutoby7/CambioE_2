var botonCambiarTamano = document.getElementById('cambiarTamano');
var campoTamanoFuente = document.getElementById('tamanoFuente');
var parrafoTexto = document.getElementById('texto').getElementsByTagName('p')[0];

botonCambiarTamano.addEventListener('click', function() {
    var tamano = campoTamanoFuente.value + 'px';
    parrafoTexto.style.fontSize = tamano;
});
