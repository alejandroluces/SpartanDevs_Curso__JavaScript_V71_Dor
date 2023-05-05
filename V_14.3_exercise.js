

// Solicitar un número X al usuario
const numero = prompt("Ingrese un número:");

// Iterar desde 1 hasta el número ingresado por el usuario
for (let i = 1; i <= numero; i++) {

  const parOImpar = i % 2 === 0 ? "par" : "impar";//valida si es par o impar (operador ternario)
  console.log(`${i}   es ${parOImpar}`); // Imprimir el resultado

}

