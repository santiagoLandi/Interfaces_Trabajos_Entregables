const correo_sesion =document.getElementById("email-sesion");
const form=document.getElementById("form-inicio-sesion-cuenta");


form.addEventListener("submit",e=>{
    e.preventDefault();
       
    document.getElementById("ctrl-email-sesion").textContent = "";
   
    let esValido = true;
    let patronCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
    if(!patronCorreo.test(correo_sesion.value)){
        document.getElementById("ctrl-email-sesion").textContent = "Ingrese una direccion de correo valida"
        esValido=false;
    }
   
    if(esValido){
        form.submit()
        window.location.href = "index.html";
    }

})

const btnPsw3 = document.getElementById("btn-psw3");


// Función para mostrar/ocultar la contraseña
function ocultarMostrarPsw(input) {
    if (input.type === "password") {
        input.type = "text";
    } else {
        input.type = "password";
    }
}

// Evento para el botón de inicio sesion cuenta (contraseña)
btnPsw3.addEventListener("click", function (e) {
    e.preventDefault();
    let input = document.getElementById("pwd3");
    ocultarMostrarPsw(input);
});
// Elementos del DOM

    

