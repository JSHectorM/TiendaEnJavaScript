function mostrarHoras(){
    var hora = new Date();
    var parrafo = document.getElementById("fecha");
    parrafo.innerHTML = hora.getHours() + ":" + hora.getMinutes() + "." + hora.getSeconds();;
}

setInterval(mostrarHoras, 1000);

//---------------------------------
//Codigo de la consola act 3 parte 2

var precioProducto = 0;
var cantidadProductos ;
var validar = false;


while(validar == false){
    cantidadProductos = Number(prompt("¿Cuantos productos son? :")); 
    if(Number.isInteger(cantidadProductos)){
        validar=true;
    }
    else{
        console.error('Introduce un numero entero.')
    }
}

for(var i = 0; i<cantidadProductos; i++){
    precioProducto = precioProducto + Number(prompt(`¿Cual es el precio del producto ${i + 1}? :`));
}

console.log('El precio total es de: $%i2',precioProducto);