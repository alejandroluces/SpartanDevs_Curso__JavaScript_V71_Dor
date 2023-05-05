

    // Solicitar un número al usuario
const numero = prompt("Ingrese un número:");

let esPrimo = true;

if (numero <= 1) {
  esPrimo = false;
} else {
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      esPrimo = false;
      break;
    }
  }
}

// Imprimir el resultado
const resultado = esPrimo ? "Es primo" : "No es primo";
console.log(`El número ${numero}  ${resultado}.`);



/* 


1))// Solicitar un número al usuario: Comentario que indica que se le solicitará un número al usuario.
2))const numero = parseInt(prompt("Ingrese un número:"));
    : Solicita al usuario ingresar un número mediante la función prompt, 
    luego lo convierte a un número entero usando parseInt y lo almacena en la constante numero.

3))let esPrimo = true;: Crea una variable llamada esPrimo y la inicializa como verdadera (true).

4))if (numero <= 1) {: Verifica si el número ingresado es menor o igual a 1.

5))esPrimo = false;: Si el número es menor o igual a 1, cambia el valor de esPrimo a falso (false), 
    ya que números menores o iguales a 1 no son primos.

6))} else {: Si el número es mayor que 1, el código ejecuta el bloque de instrucciones siguiente.

7))for (let i = 2; i <= Math.sqrt(numero); i++) {: Utiliza un bucle for para iterar desde 2 hasta 
    la raíz cuadrada del número (calculada mediante Math.sqrt(numero)).

8))if (numero % i === 0) {: Verifica si el número es divisible por el valor de i (usando el operador módulo %).

9))esPrimo = false;: Si se encuentra un divisor, cambia el valor de esPrimo a falso (false).

10))break;: Sale del bucle utilizando break.

11))}: Cierra el bloque de instrucciones if.

12))}: Cierra el bloque de instrucciones for.

13))}: Cierra el bloque de instrucciones else.

14))// Imprimir el resultado: Comentario que indica que se imprimirá el resultado.

15))const resultado = esPrimo ? "primo" : "no primo";: Crea una 
    variable resultado que contiene la cadena de texto "primo" si esPrimo es 
    verdadero, o "no primo" si es falso, utilizando el operador ternario.

16))console.log(El número ${numero} es ${resultado}.);: Imprime en la consola 
    si el número ingresado es primo o no, utilizando la interpolación de cadenas 
    y la variable resultado.

*/