const correo_sesion =document.getElementById("email-sesion");
const clave_sesion =document.getElementById("password-sesion");
const form=document.getElementById("form-inicio-sesion-cuenta");


form.addEventListener("submit",e=>{
    e.preventDefault();
       
    document.getElementById("ctrl-email-sesion").textContent = "";
    document.getElementById("ctrl-password-sesion").textContent = "";
   
    let esValido = true;
    let patronCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
   
    if(!patronCorreo.test(correo_sesion.value)){
        document.getElementById("ctrl-email-sesion").textContent = "Ingrese una direccion de correo valida"
        esValido=false;
    }
    let patronClave = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    if(!patronClave.test(clave_sesion)){
        document.getElementById("ctrl-password-sesion").textContent = "Debe contener 1mayus y 1 caract especial"
        esValido=false;
    }
   
    if(esValido){
        form.submit()
    }

})
