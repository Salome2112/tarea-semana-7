'use strict'
function multiplicar(multiplicador , multiplicando) {
    let suma= 0;
    for (let i=0; i < multiplicador; i++){
        suma = suma + multiplicador;
    }
     return suma; 
}

let primerNumero = Number(prompt("Ingrese multiplicador"));
let segundoNumero = Number(prompt("Ingrese multiplicado"));

let resultado = multiplicar(primerNumero , segundoNumero);
   alert(resultado);

