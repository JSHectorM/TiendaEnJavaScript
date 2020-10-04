function mostrarHoras(){
    var hora = new Date();
    var parrafo = document.getElementById("fecha");
    parrafo.innerHTML = hora.getHours() + ":" + hora.getMinutes() + "." + hora.getSeconds();;
}

setInterval(mostrarHoras, 1000);