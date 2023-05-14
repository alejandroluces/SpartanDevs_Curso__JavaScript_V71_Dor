/* 
Spread Operator (operador de expansión)

Su sintaxis es ...

*/

const numbers = [-12, 2, 3, 23, 43, 2, 3]
console.log(...numbers);
console.log(numbers);

//Enviar elementos en un array a una función
const addNumbers =(a,b,c) =>{
console.log(a+b+c);
}
addNumbers(2,2,3);

let numbersToadd=[6,9,10]

addNumbers(1,2,numbersToadd);


//Añadir un array a otro array
// Usuarios registrados
let users = ['javier', 'david', 'rosa', 'juan', 'mercedes']
console.log(users);

// nuevos usuarios para agregar
let newUsers = ['marta', 'jaime', 'laura']
users.push(newUsers[0],newUsers[1],newUsers[2])

console.log(users);

// Otro ejemplo para añadir usuarios 

let newUsers2 = ['Leo', 'Alejandro', 'Jose R',"Maria","Atilio"]
users.push(...newUsers2)
console.log(users);


//Copiar arrays

let arrayUser= users
console.log(arrayUser);


//Concatenar arrays

let arr2=[1,5,8,3]
let arr3=[9,2]

let arrConcat= arr2.concat(arr3)
console.log(arrConcat);

// Otro ejemplo

let arr4=[1,15,18,3]
let arr5=[9,12]
let arrConcat2= [...arr4,...arr5]
console.log(arrConcat2);


// Enviar un número indefinido de argumentos a una función
// (parámetros REST)

const restParms = (...numbers5)=>{
    console.log(numbers5);
}

restParms(1,5,6,6,45,5,4)

// Libreria Math
const numbers7 = [-12, 2, 3, 23, 43, 2, 3]
console.log(Math.max(...numbers7));
console.log(Math.min(...numbers7));


// Eliminar elemento duplicados
console.log([...new Set(numbers7)]);
