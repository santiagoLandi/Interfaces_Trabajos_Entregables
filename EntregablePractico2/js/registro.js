
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
   
    if(edad.value < 5){
        esValido=false;
    }
    if(!patronCorreo.test(correo.value)){
        esValido=false;
    }
    
    let patron = /^(?=.*[A-Z])(?=.*\d?).{8,}$/;

    if(!patron.test(clave.value)){
        esValido=false;
    }else if(clave.value!=clave2.value){
        esValido=false;
    }
    
    if(esValido){
        validacionCorreo()
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
        <div id="loading-container">
            <div id="loading"></div>
            <p id="loading-progress">0%</p>
        </div>
      </div>
    `;
    contenedor.innerHTML = mensaje;
    contenedor.classList.add("validarCorreo");

    // Mostrar el loading
    document.getElementById('loading-container').style.display = 'block';
    
    let progress = 0;
    let interval = setInterval(function() {
        progress += 10;
        document.getElementById('loading-progress').textContent = progress + '%';
        if (progress >= 100) {
            clearInterval(interval);
            window.location.href = "index.html"; // Redirigir a la página de inicio
        }
    }, 1000); // Incrementar cada segundo
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


// Elementos del DOM

    
