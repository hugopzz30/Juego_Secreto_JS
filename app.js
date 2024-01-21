let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 100;
let numeroMaximoDeJuegos = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el numero secreto en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`)
        document.querySelector('#reiniciar').removeAttribute('disabled');
    }else{
        //El usuario no acerto
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', "El numero es menor")
        }else{
            asignarTextoElemento('p', "El numero es mayor")
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = "";
}


function generarNumeroSecreto () {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //Si ya sorteamos todos los numeros
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if(listaNumerosSorteados.length == numeroMaximoDeJuegos){
        asignarTextoElemento('p', "Llegaste al numero maximo de intentos.")
        listaNumerosSorteados = [];
    }else{
        if(listaNumerosSorteados.length == numeroMaximo){
            asignarTextoElemento('p', "Ya se sortearon todos los numeros.")
        }else{

            //Si el numero generado esta incluido en la lista
            if (listaNumerosSorteados.includes(numeroGenerado)){
                return generarNumeroSecreto();
            }else{
                listaNumerosSorteados.push(numeroGenerado);
                return numeroGenerado
            }

        }
    }
}

function condicionesIniciales () {
    asignarTextoElemento('h1', "Juego del Numero Secreto!");
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //Limpiar Caja
    limpiarCaja();
    //Indicar mensaje de Inicio
    //Generar el numero aleatorio
    //Reiniciar el numero de intentos
    condicionesIniciales();
    //Desabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

    
}

condicionesIniciales();