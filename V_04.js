/*
Objeto Math

Objeto estático
Tenemos que usar su nombre para utilizarlo

Propiedades:

Math.E - Math.Pi 

Métodos :

Math.abs(x) Devuelve el valor absoluto de x
Math.ceil(x) Devuelve el entero más grande mayor o igual que un número.
Math. floor(x) De vuelve el entero más pequeño menor o igual que un número.
Math.pow(x, y) Devuelve la potencia de x elevado a y 
Math.random() Genera un número pseudpaleatorio entre O y 1
Math.round(x) Devuelve el valor de un número redondeado al entero más cercano.
Math.sign(x) Devuelve el signo de la x, que indica si x es positivo, negativo o cero.
match.sqrt(x) Devuelve la raiz cuadrada de x
*/

console.log(Math.E);
console.log(Math.PI);
let num=5.3;
// Math.abs(x) Devuelve el valor absoluto de x
console.log(Math.abs(num));

// Math.ceil(x) Devuelve el entero más grande mayor o igual que un número.
console.log(Math.ceil(num));

// Math. floor(x) De vuelve el entero más pequeño menor o igual que un número.
console.log(Math.floor(num));

// Math.pow(x, y) Devuelve la potencia de x elevado a y 
console.log(Math.pow(3,2));

// Math.random() Genera un número pseudpaleatorio entre O y 1
// Math.round(x) Devuelve el valor de un número redondeado al entero más cercano.
console.log(Math.random());
console.log(Math.round(Math.random()*100));

// console.log(Math.random()* (max - min)+min)

console.log(Math.round(Math.random()* (10 - 5)+5));
console.log(Math.round(Math.random()* (100 - 50)+50))

// Math.sign(x) Devuelve el signo de la x, que indica si x es positivo, negativo o cero.

console.log(Math.sign(num));

// match.sqrt(x) Devuelve la raiz cuadrada de x
let num2=9;
console.log(Math.sqrt(num2));