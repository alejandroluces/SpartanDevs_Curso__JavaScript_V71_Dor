/*
Operador ternario 
(condición) ? true : false

(condición) ?
(primera sentencia, segunda sentencia)

(primera sentencia, segunda sentencia)
*/

let num=103;

// Para demostras si el numero es impar o par
(num % 2 ==0) ? console.log(` ${num} es par`): console.log(` ${num} es impar`);







// Otra forma***Para demostras si el numero es impar o par

if(num % 2==0) console.log(`${num} es par`);
else console.log(`${num} es impar`);




// Forma P_YPETO+++++++++

// Función que determina si un número es par o impar utilizando el operador ternario
function parOImpar(numero) {
    // Utilizamos el operador ternario para evaluar si el número es par o impar
    // Si el residuo de la división entre 2 es 0, el número es par; de lo contrario, es impar
    let resultado = numero % 2 === 0 ? "par" : "impar";
  
    // Retornamos el resultado
    return resultado;
  }
  
  // Ejemplo de uso de la función parOImpar
  let numero = 7;
  console.log(`El número ${numero} es ${parOImpar(numero)}.`);
  
