/*

https : //developer .mozilla .org/es/docs/Web/HavaScript/Referencia/ Operadores/Destructuring_assignment
La destructuración es una expresión de JavaScript que hace posible la extracción de datos de arreglos u objetos 

*/

const person={
    name:"Alejo",
    age:20,
    email: "aluces@gmail.com"

}
/* 
const name = person.name
const age = person.age
const email = person.email
*/

// Destructuring
// Otro ejemplo
/* 
const{name,age,email}=person
console.log(name,age,email);
*/

/* 
const numbers=[1,2,3,4,5]

const[a,segundaPosicion] =numbers

console.log(segundaPosicion);
*/
// Ejemplo
/* 
const printPerson=({name})=>{
    console.log(name);
}
printPerson(person)

*/
/* 
const printPerson=({name:nombre})=>{
    console.log(nombre);
}
printPerson(person)
*/

const getUsers = async () => {
    const { data: users } = await axios.get('https://jsonplaceholder.typicode.com/users')

    console.log(users)
}

getUsers()