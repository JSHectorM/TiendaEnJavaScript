

$(document).ready(function () {

    $("#formulario").submit(function () {  
        if($("#nombre").val().length < 5) {  
            alert("El nombre debe tener como mínimo 5 caracteres");  
            return false;  
        }else if ($("#marca").val().length == 0){
            alert("Debe escribir la marca");
            return false;
        } else if ($('#modelo').val().length == 0){
            alert("Debe escribir la modelo");
            return false;
        } else if ($('#precio').val().length == 0) {
            alert("Debe escribir un precio");
            return false;
        } else if ($('#imagen').val().length == 0) {
            alert("Inserte la url de la img");
            return false;
        }
        return true;  
    });  
});

//------------------------------------
//Agregar producto...........

