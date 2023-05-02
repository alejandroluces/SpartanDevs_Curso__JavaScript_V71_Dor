let numbers = [1,2,3,4,5];

/*
Arrays - Propiedad
    Array.length - devuelve el número de posiciones que contiene el array
*/
console.log(numbers.length);
/*
Arrays - Métodos
    Array.isArray(variable a evaluar) - Devuelve true si la variable es un array.
*/

let number = 4;

console.log(Array.isArray(number));
console.log(Array.isArray(numbers));

/*
Eliminar un elemento
    .shift() - Elimina el primer elemento del array y devuelve ese elemento 
*/
console.log(numbers);
numbers.shift();
console.log(numbers);

/*
.pop() - Elimina el último elemento de un array y devuelve ese elemento
*/
let number2 = [1,2,3,4,5];

console.log(number2);
number2.pop();
console.log(number2);


/*
Añadir elementos
.push(elementl, element2,...) - Añade uno o más elementos al final del array y devuelve la nueva longitud.
*/

let number3 = [1,2,3,4,5];

console.log(number3);
let newLength = number3.push(16,20);
console.log(number3);
console.log(newLength);


/*
.unshift(elementl, element2,...) - Añade uno o más elementos al comienzo del array y devuelve la nueva longitud.
*/
let number4 = [1,2,3,4,5];

console.log(number4);
number4.unshift(-16,-20);
console.log(number4);


/*
.indexOf() - Devuelve el primer índice del elemento que coincida con 
el valor especificado, o -1 si ninguno es encontrado.
*/

let number5 = [1,2,3,4,5,1];
console.log(number5.indexOf(3));
console.log(number5.indexOf(1));


/* 
.lastIndexOf() - Devuelve el último índice del elemento que coincida 
con el valor especificado, o -1 si ninguno es encontrado.
*/

console.log(number5.lastIndexOf(3));
console.log(number5.lastIndexOf(1));


/* 
.reverse() - Invierte el orden de los elementos del array.
*/

let number6 = [1,2,3,4,5];

console.log(number6);
number6.reverse();
console.log(number6);



/* 
join(sepanador) - Devuelve un string con el separador que indiquemos, 
por defecto son comas
*/

console.log(number6);
let arrayString = number6.join(" - ")
console.log(number6.join(" - "));
console.log(arrayString);



/* 
.splice(a,b,items) - Cambia el contenido de un array eliminando elementos 
existentes y/o agregando nuevos elementos, 
    a - Indice de inicio 
    b - Número de elementos (opcional)
    items - Elementos a añadir en el caso de que se añadan. (opcional)

*/

let number7 = [1,2,3,4,5];

console.log(number7);
number7.splice(2) //Elimina desde la posicion 2 hasta el final
console.log(number7);


let number8 = [1,2,3,4,5,6,7,8];
number8.splice(2,3); //Elimina desde la posicion 2 las proximas 3 posiciones
console.log(number8);


let number9 = [1,2,3,4,5,6,7,8];
number9.splice(2,3,25,55,80); //Elimina desde la posicion 2 las proximas 3 posiciones, 
                              // y a partir del 3 campo agrega datos al array(Agrego 25,55,80)

console.log(number9);

// En este ejemplo en el Splice agregamos datos usando el 0 en la segunda posicion
// Con este 0 Indicamos que apartir de la segunda posicion agegar el 25,55,80 sin borrar datos

let number10 = [1,2,3,4,5,6,7,8];
number10.splice(2,0,25,55,80); 
console.log(number10);


/* 
    .slice(a,b) - Extrae elementos de un array desde el índice a hasta el índice b. 
    Si no existe b lo hace desde a hasta el final, si no existe ni a ni b hace una 
    copia del original.
*/

//El Slice al colocarle un campo nos indica que desde esa posicion
// va generar un nuevo array desde esa posicion hasta el fin
let newNumbre10= number10.slice(2);
console.log(number10);
console.log(newNumbre10);


//El Slice al colocarle dos campo nos indica el primer campo donde comenzara a tomar data
// para el nuevo array. Y el segun campo hasta la posicion que llegara y generara el nuevo array


let number11 = [1,2,3,4,5,6,7,8];

let newNumbre11= number11.slice(2,7);
console.log(number11);
console.log(newNumbre11);