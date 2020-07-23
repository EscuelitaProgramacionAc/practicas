/*function aviso(){
 var Enviar = alert('Usted se pre-inscribió correctamente. A continuación recibirá un correo detallando los siguientes pasos');
 if (Enviar==true){
 console.log('Usted se pre-inscribió correctamente. A continuación recibirá un correo detallando los siguientes pasos');  
} 
} */

function preInscripcion(){
    debugger;
    var preInscripcion = {
       nombre: $("#nombre").val(),
       apellido: $("#apellido").val(),
       email: $("#email").val(),
       pais: $("#pais").val(),
       ocupacion: $("#ocupacion").val()
    }
    
    $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/api/preinscripcion',
        data: JSON.stringify(preInscripcion),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data){
            if(data != null){
                alert("Usted se pre-inscribió correctamente. Muchas gracias!");
            }  
        },
        error: function(err){
            alert("Ocurrió un error");
            console.log(err);
        }
    });
}