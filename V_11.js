/* Bucles */
/*
Indeterminados - No sabemos el número de veces que se va a ejecutar el código


Bucle while 
while(condición){
    //código a ejecutar
}
Bucle do...while 
do{
    //código a ejecutar 

}while(condición)
*/


// En este caso del uso de While cuando ya se definela contraseña
// Al cargagar la pagina no la pide

let pass = "hola";

// while(pass != "hola"){
//     pass=prompt("Introduzca la contraseña")
// }

// console.log("Fin del bucle");



// En este caso del uso del do cuando ya se definela contraseña
// Al cargagar la pagina la sigue pidiendo a pesar que se ha definiddo


do{
    pass= prompt("Introduzca su contraseña")

}while(pass !="hola")