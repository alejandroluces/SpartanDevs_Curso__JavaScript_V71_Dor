/*
•	Son estructuras que nos permiten almacenar varios datos y agruparlos.
•	Se pueden llenar con cualquier tipo de dato válido en JavaScript y deben ir separados por comas
•	Se pueden mezclar tipos de datos, pero no es recomendable.
•	Se declaran con llaves cuadradas o corchetes []
•	Pueden declararse vacíos o con un contenido ya establecido
•	Pueden añadirse o eliminarse elementos en el momento que queramos

let array = [] //Array vacío
let numeros = [1,2,3,4,5] //Array con contenido inicial

*/


let numeros = [1,2,3,4,5,6] ;
let palabras=["Hola", "estamos", "en", "youtube"]
let booleans=[true,false,true]


console.log(numeros);
console.log(numeros[5]);
console.log(numeros[5]+numeros[4]);

console.log(palabras[1].length);

console.log(`La palabra ${palabras[3]} tiene ${palabras[3].length} letras`);

