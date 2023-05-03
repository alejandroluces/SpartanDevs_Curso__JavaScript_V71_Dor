/* Bucles */
    /*
    Determinados

    bucle for

    Su sintaxis se compone de 3 partes
        Iniciación de variable
        Número de vueltas
        Incremento o decremento

    for(let i=0;i<=10;i++){
     Código a ejecutar
    }


*/

for(let i=0;i<=10;i++){
    console.log(i);
}

// Otra forma seria la siguiente.

for(let i=10;i>=0;i--){
    console.log(i);
}

//Otro ejemplo usando If

for(let i=10;i>=0;i--){
    if(i!=5){
        console.log(i);
    }
}

// Siguiente buecle FOR

let numbers = [10,33,22,30,4,52]

for(let i=0;i<numbers.length;i++){
    console.log(`i vale ${i} y el valor de esa posicion en el array es ${numbers[i]}`);
}