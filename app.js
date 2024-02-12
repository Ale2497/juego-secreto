
let numeroSecreto = 0;
let numeroDeIntentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento,texto){
    // puente entre java y html utilizando el metodo querySelector
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;

}

function VerificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${numeroDeIntentos} ${(numeroDeIntentos ==1) ? 'vez' : 'veces'} `);
        //desactivar  el atributo disable del boton utilizando Id
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        //el usuariono acerto
        if( numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','EL numero secreto es menor');
            
        }else{
            asignarTextoElemento('p','El numero secreto es mayor');
            
        }
        numeroDeIntentos++;
        limpiarCaja();
    }   
    return;
}




function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    //si ya sorteamos todos lo numeros

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todo los nuemeros posibles')
    }else{
        //si el numero generado esta en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();

        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    
}


function limpiarCaja(){
     document.querySelector('#valorUsuario').value = '';

}

function reiniciarJuego(){
    //lmpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalo de numero
    condicionesIniciales();
    //generar el numero aleatorio
    numeroSecreto = generarNumeroSecreto();
    //dashabilitar el boton de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled','true');
    //inicializar el numero de intentos
    numeroDeIntentos = 1;

}
function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del Número Secreto');
    asignarTextoElemento('p',`Escoge un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
}

condicionesIniciales();