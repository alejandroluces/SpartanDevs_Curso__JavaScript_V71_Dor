// Se define el array de letras
const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

// Solicitamos el número de DNI al usuario
let dni = prompt("Por favor, introduce tu número de DNI (sin letra)");

// Comprobamos que el DNI sea válido
if (dni < 0 || dni > 99999999 || isNaN(dni)) {
  alert("El DNI introducido no es válido");
} else {
  // Calculamos la letra que corresponde al DNI
  let letra = letras[dni % 23];

  // Mostramos el DNI completo
  alert(`El DNI completo es ${dni}${letra}`);
}
console.log(`El DNI completo es ${dni} ${letra}`);
