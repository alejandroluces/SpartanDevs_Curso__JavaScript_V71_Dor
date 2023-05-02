/*
Sintaxis simple: 
switch(evaluación) {
     case n:
//código 
break; 
 case n2:
 //código
break;
default : 
  //código
}
Sintaxis múltiple: 
switch(evaluación){ 
    case n: 
    case n2: 
    case n3: 
    case n4:
        //código
        break; 
    case n5: 
    case n6:
        //código
    break;
    default: 
    //código
    }
    */

    let num=4;

    switch (num) {
        case 1:  console.log("Num tiene el valor1");
        break;
        case 2:  console.log("Num tiene el valor2");
        break;
        default: console.log ("Num no vale ni 1 ni 2");
        break;
    }
    switch (num) {
        case 1:
        case 3:
        case 5:
        console.log(`${num} es impar`);
        break;
        case 2:
        case 4:
        console.log(`${num} es par`); 
    }
    /* Sintaxis múltiple en cadena // Investigar */