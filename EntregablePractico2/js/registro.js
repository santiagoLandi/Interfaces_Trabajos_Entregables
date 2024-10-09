const nombre=document.getElementById("fname");
const apellido=document.getElementById("lname");
const edad=document.getElementById("edad");
const correo=document.getElementById("email");
const clave=document.getElementById("pwd1");
const clave2=document.getElementById("pwd2");
const form=document.getElementById("form");

form.addEventListener("submit",e=>{
    e.preventDefault();
       
    document.getElementById("ctrlNombre").textContent = "";
    document.getElementById("ctrlApellido").textContent = "";
    document.getElementById("ctrlEdad").textContent = "";
    document.getElementById("ctrlEmail").textContent = "";
    document.getElementById("ctrlPsw").textContent = "";
    document.getElementById("ctrlPsw1").textContent = "";
   
    let esValido = true;
    let patronCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
   
    if(nombre.value.length <3){
        document.getElementById("ctrlNombre").textContent = "El nombre no es válido"
        esValido=false;
    }
    if(apellido.value.length<4){
        document.getElementById("ctrlApellido").textContent = "El apellido no es válido"
        esValido=false;
    }
    if(edad.value < 5){
        document.getElementById("ctrlEdad").textContent = "Debe ser mayor de 5 anios"
        esValido=false;
    }
    if(!patronCorreo.test(correo.value)){
        document.getElementById("ctrlEmail").textContent = "Ingrese una direccion de correo valida"
        esValido=false;
    }
    
    let patronClave2=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;

    if(!patronClave2.test(clave.value)){
        document.getElementById("ctrlPsw").textContent = "Debe contener 1mayus y 1 caract especial"
        esValido=false;
    }else if(clave.value!=clave2.value){
        document.getElementById("ctrlPsw1").textContent = "Las claves no coinciden"
        esValido=false;
    }
    
    if(esValido){
        validacionCorreo()
    }

})

function validacionCorreo(){
   
    let formulario=document.getElementById("form");
    let contenedor=document.getElementById("regCont");
    formulario.classList.add("ocultar");
    contenedor.innerHTML= `<h2>¡Registro exitoso! Por favor, revisa tu correo electrónico y sigue el enlace de verificación para activar tu cuenta</h2>`;
    contenedor.classList.add("validarCorreo");

     // Esperar 15 segundos antes de redirigir al index
     setTimeout(function() {
        window.location.href = "index.html"; // Redirigir a la página de inicio
    }, 15000);
}

/*
const btnPsw=document.getElementById("btn-psw");
const btnPsw2=document.getElementById("btn-psw2");
btnPsw.addEventListener("click",ocultarMostrarPsw());
btnPsw2.addEventListener("click",ocultarMostrarPsw());
function ocultarMostrarPsw(){
    e.preventDefault();
    let input=document.getElementById("pwd1");
    let input2=document.getElementById("pwd2");
    if(input.type=== "password"){
        input.type="text"
    }if(input2.type==="password"){
        input2.type="text"
    }else{
        input.type="password"
        input2.type="password"
    }
}
 */
const btnPsw = document.getElementById("btn-psw");
const btnPsw2 = document.getElementById("btn-psw2");

// Función para mostrar/ocultar la contraseña
function ocultarMostrarPsw(input) {
    if (input.type === "password") {
        input.type = "text";
    } else {
        input.type = "password";
    }
}

// Evento para el primer botón (primera contraseña)
btnPsw.addEventListener("click", function (e) {
    e.preventDefault();
    let input = document.getElementById("pwd1");
    ocultarMostrarPsw(input);
});

// Evento para el segundo botón (segunda contraseña)
btnPsw2.addEventListener("click", function (e) {
    e.preventDefault();
    let input = document.getElementById("pwd2");
    ocultarMostrarPsw(input);
});

    
