/*Condicional Simple */
// let num=2;



// if(num>0) {
//     console.log(`${num}  Es mayor que 0`);
//     console.log(`${num}  Es mayor que 0`);
// } 

/*Condicional Compuesto */
// if(num>0) {
//     console.log(`${num}  Es mayor que 0`);
    
// } else{
//     console.log(`${num}  Es menor que 0`);
// }


/*Condicional Multiple */
// if(num>0) {
//     console.log(`${num}  Es mayor que 0`);
    
// } else if (num<0){
//     console.log(`${num}  Es menor que 0`);
// } else{
//     console.log(`${num}  Es igual que 0`);
// }

// let num1=5;
// let num2=4;
// let num3=0;
// let num4=5;

/*&& and */

// if(num3>0 && num4>0){
//     console.log(`${num3} y ${num4} son mayores que 0`);
// }

/*  || o  */
// let num1=5;
// let num2=4;


// if(num1>0 || num2>0){
//     console.log(`${num1} o ${num2} son mayores que 0`);
// }

let num1=-1;
let num2=-3;

if(num1>0){
    if(num2>0){
        console.log(`${num1} y ${num2} son mayores que 0`);
    } else if (num2<0){
        console.log(`${num1} es mayor que 0 y ${num2} es menores que 0`);
    } else{
        console.log(`${num1} es mayor que 0 y num2  es igual a 0`);
    } 
}
else if(num1<0){
    if (num2<0){
        console.log(`num1 y num2 son menores que 0`);
    } else if(num2>0){
        console.log(`Num1 es menor que 0 y Num2 es mayor que 0`);
    } else{
        console.log(`Num1 es menor que 0 y Num2 es igual a 0`)
    }

}else{
    if(num2>0){
        console.log(`${num2} es mayor que 0 y ${num1} es igual que 0`);
    } else if (num2<0){
        console.log(`${num2} es menor que 0 y ${num1} es igual que 0`);
    } else{
        console.log(`${num1} y ${num2} son iguales a 0`);
    } 
}



let word = "Holaa";

if(word.length>4){
    console.log(`${word} tiene mas de 4 caracteres`);
}else if(word.length<4){
    console.log(`${word} tiene menos de 4 caracteres`);
}else{
    console.log(`${word} tiene  4 caracteres`);

}

let respuesta = true;

if (respuesta== true) console.log(`Respuesta tiene valor true`);
if (respuesta== false) console.log(`Respuesta tiene valor false`);

if (respuesta) console.log(`Respuesta tiene valor true`);
if (!respuesta) console.log(`Respuesta tiene valor false`);

    
    




