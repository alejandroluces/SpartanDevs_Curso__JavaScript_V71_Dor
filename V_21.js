/* 
Arrays - Métodos II

.from(iterable) - Convierte en array el elemento iterable|
.sort([callback]) - Ordena los elementos de un array 
    alfabéticamente(valor Unicode), si le pasamos un 
    callback los ordena en función del algoritmo que 
    le pasemos.
.forEach(callbak(currentValue, [index])) - ejecuta la 
    función indicada una vez por cada elemento del array.
.some(callback) - Comprueba si al menos un elemento del 
    array cumple la condición
.every(callback) - Comprueba si todos los elementos del 
    array cumplen la condición
.map(callback) - Transforma todos los elementos del array 
    y devuelve un nuevo array
.filter(callback) - Filtra todos los elementos del array 
    que cumplan la condición y devuelve un nuevo array
.reduce(callback) - Reduce todos los elementos del array 
    un único valor 

*/



// .from(iterable) - Convierte en array el elemento iterable|

let word="Hola Mundo"

console.log(Array.from(word));
console.log(word.split(""));

/* 
.sort([callback]) - Ordena los elementos de un array 
    alfabéticamente(valor Unicode), si le pasamos un 
    callback los ordena en función del algoritmo que 
    le pasemos.
*/

const letter= ["b","c","z","a","g"]
const numbers= [9,80,4,300,46]
console.log(letter.sort());
console.log(numbers.sort((a,b)=>a-b));


// .forEach(callbak(currentValue, [index])) - ejecuta la 
//     función indicada una vez por cada elemento del array.

const numbers2= [9,80,4,300,46]
numbers2.forEach((number)=> console.log(number));
numbers2.forEach((number,index)=> console.log(`El numero ${number} esta en la posicion ${index}`));


/* 
.some(callback) - Comprueba si al menos un elemento del 
    array cumple la condición

*/

const words=["HTML","Css","JavaScript","PHP"]
console.log(words.some(word=>word.length>2));
console.log(words.some(word=>word.length>10));

/* 
.every(callback) - Comprueba si todos los elementos del 
    array cumplen la condición
*/
console.log(words.every(word=>word.length>2));
console.log(words.every(word=>word.length>3));

/*
.map(callback) - Transforma todos los elementos del array 
    y devuelve un nuevo array
*/

const numbers3= [90,8,45,30,4]

numbers3.map(number=>console.log(number*2));

const numbers4= numbers3.map(number=> number*2);
console.log(numbers4);

/* 
.filter(callback) - Filtra todos los elementos del array 
    que cumplan la condición y devuelve un nuevo array
*/

const numbers5= numbers4.filter(number=> number >40)
console.log(numbers5);

/*
.reduce(callback) - Reduce todos los elementos del array 
    un único valor 
*/

const numbers6= [9,8,10,1,4]
console.log(numbers6.reduce((a,b)=>a+b));

// Otro ejemplo

const users=[{
    name: "user 1",
    online: false
},
{
    name: "user 2",
    online: true
},
{
    name: "user 3",
    online: true
},
{
    name: "user 4",
    online: true
},
{
    name: "user 5",
    online: false
},
{
    name: "user 6",
    online: true
},
]

const usersOnline = users.reduce((cont,user)=>{
    if(user.online)cont++
    return cont
},0)
console.log(`Hay ${usersOnline} usuarios conectados`);
