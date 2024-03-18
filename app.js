//let numeroSecreto = generarNumeroSecreto();
//let intentos=1;

//console.log(numeroSecreto);

let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos===1) ? 'intento':'intentos'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');

        } else{
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        }else{
            asignarTextoElemento('p','El número secreto es mayor');
        }
    }
  
    intentos++;
    limpiarCaja();
    return;
}

function limpiarCaja(){
    let valorCaja=document.querySelector('#valorUsuario')
    valorCaja.value ='';
    }

function generarNumeroSecreto() {
  
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log (numeroGenerado);
    console.log (listaNumerosSorteados);

    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles.');
    }else{
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
            } else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;}
}}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos =1;
    console.log (numeroSecreto)
    }
    
function reiniciarJuego(){
    //Limpiar la caja
limpiarCaja();
    
    //Indicar mensaje de intervalo de números
    //Generar número aleatorio
    //Inicializar el número de intentos
condicionesIniciales();
    
    //Deshabilitar el botón de nuevo juego
document.querySelector('#reiniciar').setAttribute('disabled','true');
}
        
condicionesIniciales();