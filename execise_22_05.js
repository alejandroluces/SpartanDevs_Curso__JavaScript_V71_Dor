// función que calcule la suma de los primeros n números naturales
// Define una función llamada sumaNaturales() que toma un parámetro n. 
// Dentro de esta función, inicializa una variable suma en 0 y luego 
// ejecuta un bucle for que recorre desde 1 hasta n. En cada iteración, 
// suma el valor actual de i al acumulador suma.

let numero = parseInt(prompt("Introduce un número: "));

function sumaNaturales(n) {
    let suma = 0;
    for(let i = 1; i <= n; i++) {
        suma += i;
    }
    return suma;
}


console.log("La suma de los primeros " + numero + " números naturales es " + sumaNaturales(numero));
