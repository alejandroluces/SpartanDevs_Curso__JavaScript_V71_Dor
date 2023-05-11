// function saludar(){
//     console.log("hola");
// }
// saludar();

const saludar=()=>console.log("hola");
const saludarUsuario=(user)=>console.log(`Hola ${user}`);
saludarUsuario("Sara")
saludarUsuario("Maria")


// Otra funcion__ Otro ejemplo
const suma = (num1,num2)=> num1+num2

console.log(suma(20,10));

//Otro ejemplo

const suma2 = (num3,num4)=>{ 
    return num3+num4
}
console.log(suma(9,111));

// Otro ejemplo

const suma3= (num5, num6)=>{
    if(num5==9){
        return num5+num6
    }
    return num5
}
console.log(suma3(8,32));

// Otro ejemplo

const suma4= (num7,num8)=> num7+num8

let result= suma(12,3)

console.log(result);