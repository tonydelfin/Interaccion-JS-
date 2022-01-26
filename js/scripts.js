// console.log("funcinas correctamente");
// seleccionar contenido 

//querySelector

const heading = document.querySelector(".header__texto h2") // retorna 0 o 1 elementos se recominda unsa ids
heading.textContent = "Nuevo heading";// modifica el selector 
// heading.classList.add("Nueva_clase"); // para agregar clases en js
// console.log(heading); 


//querySelectorAll

const enlace = document.querySelectorAll(".navegacion a"); // retorna todos los selectores que hay
// console.log(enlace);
enlace[0].textContent = "Nuevo Enlace"; // si se quiere acceder a solo un selector se utiliza un arreglo
///(((( Se puede hacer lo mismo que el primero))))

// enlace[0].classList.add = ("Nueva_calse");
// console.log(enlace);
// enlace[0].classList.remove =("Nueva_calse")


//getElementById Ya no se usa mucho

// const headin2 = document.getElementById("heading");
// console.log(headin2);


////Generar un nuevo elemento con JS

const nuevoElemento = document.createElement("A"); // con mayusculas cuando se usa createElemento

// agregar el href

nuevoElemento.href = "nuevo elnace.html";
// agregar el texto
nuevoElemento.textContent = "Nuevo elemento";


//Agregar la clase

nuevoElemento.classList.add("navegacion__enlace");

//agregarlo al documento HTML

const nav = document.querySelector(".navegacion");
nav.appendChild(nuevoElemento);


// console.log(nuevoElemento);



/////////////Eventos

// console.log(1);

// window.addEventListener('load', function(){ //se le conoce como callback
//     // load espera que el html y los archivos esten listos
//     console.log(2);
// });

// window.onload = function(){
//     console.log(3);
// }

// ////////////////////////////////////////////////////////////solo espera que se descarge el html no espera las imagenes o archivos 
// //por eso se ejecuta primero
// document.addEventListener('DOMContentLoaded', function(){
//     console.log(4);
// });

// console.log(5);


// window.onscroll = function()
// {
//     console.log("Escrolling...")
// }

//seleccionar elementos y asociales un evento

// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(evento) // se le pasa el evento para obener info de el evento que se ejecuta 
// {
    
//     console.log(evento)
//     evento.preventDefault();// no ejecuta la accion por default para fomrularios
//     console.log("enviando formulario");
// })


/// eventos de los Inputs y de textarea


const datos= {
    nombre: '',
    email: '',
    mensaje:''
}

const nombre= document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario =  document.querySelector(".formulario");


nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

/// eventos de submit
formulario.addEventListener('submit', function(e){    

    e.preventDefault();


    // validar formulario


    const { nombre, email, mensaje } = datos;


    if(nombre === "" || email === "" || mensaje === ""){
        mostrarAlerta("Todos los inputs son obligatorios" , true);
        return; // corta la ejecucion del codigo
    }
    // console.log(nombre);
    // console.log(email);
    // console.log(mensaje);


    //mandar mensaje que se envio correctamente el formulario
    
    mostrarAlerta("Enviado correctamente");


});



function leerTexto(e){

     datos[e.target.id] = e.target.value;

    //  console.log(datos);

    // console.log(e.target.value);
}


function mostrarAlerta( mensaje, error = null){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;


    if(error) {
        alerta.classList.add('error');
    }
    else{
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);

    // desaparecer la alerta 
    setTimeout(() => {
        alerta.remove();
    }, 5000);
}


//reefactoring organar el codigo haciendolo mas corto
