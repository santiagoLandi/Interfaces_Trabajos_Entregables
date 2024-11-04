const nombre=document.getElementById("fname");
const apellido=document.getElementById("lname");
const edad=document.getElementById("edad");
const correo=document.getElementById("email");
const clave=document.getElementById("pwd1");
const clave2=document.getElementById("pwd2");
const form=document.getElementById("form");

form.addEventListener("submit",e=>{
    e.preventDefault();
    
    //Remueve las clases que se habian colocado en los inputs con error
    edad.classList.remove("error-input");
    correo.classList.remove("error-input");
    clave.classList.remove("error-input");
    clave2.classList.remove("error-input");
   
    let esValido = true;
    let patronCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
   
    if(edad.value < 5){
        //Agrega la clase error al input
        edad.classList.add("error-input");
        esValido=false;
    }
    if(!patronCorreo.test(correo.value)){
        //Agrega la clase error al input
        correo.classList.add("error-input");
        esValido=false;
    }
    
    let patron = /^(?=.*[A-Z])(?=.*\d?).{8,}$/;

    if(!patron.test(clave.value)){
        console.log(clave.value);
        //Agrega la clase error al input
        clave.classList.add("error-input");
        esValido=false;
    }else if(clave.value!=clave2.value){
        //Agrega la clase error al input
        clave2.classList.add("error-input");
        esValido=false;
    }
    
    if(esValido){
        validacionCorreo();
    }

})

function validacionCorreo(){
    let formulario = document.getElementById("form");
    let contenedor = document.getElementById("regCont");

    // Ocultamos el formulario
    formulario.classList.add("ocultar");
    
    // Insertamos el mensaje de validación dentro del mismo contenedor
    let mensaje = `
      <div class="mensaje-validacion">
        <h2>¡Registro exitoso! Aguarda que serás redirigido a la página principal</h2>
      </div>
    `;
    contenedor.innerHTML = mensaje;
    
    contenedor.classList.add("validarCorreo");

    setTimeout(() => {
        window.location.href = "index.html";
    }, 10000); // Redirigir a la página de inicio
  
}



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