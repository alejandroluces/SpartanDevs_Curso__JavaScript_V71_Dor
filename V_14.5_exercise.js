// Solicitar un número entero mayor que cero al usuario
const numero = prompt("Ingrese un número entero mayor que cero:");

// Verificar que el número ingresado sea mayor que cero


// if (numero <= 0) {
//   console.log("Por favor, ingrese un número entero mayor que cero.");
// } else {


  // Calcular el factorial del número
  let factorial = 1;
  for (let i = 1; i <= numero; i++) {
    factorial *= i;
  }

  // Imprimir el resultado
  console.log(`El factorial de ${numero} es ${factorial}.`);
