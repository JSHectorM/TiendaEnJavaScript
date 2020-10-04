var hora = new Date();
var parrafo = document.getElementById('fecha');

function mostrarHoras(){
    parrafo.innerHTML = hora.getHours() + ":" + hora.getMinutes() + "." + hora.getSeconds();;
}

setInterval(mostrarHoras, 1000);