// String

// let cadena="Hola Mundo";
/* PROPIEDADES
length-> Devuelve la longitud de la cadena
*/

// console.log(cadena.length);

/*_____   Metodos
Todos los metodos devuelven una cadena
nueva, la cadena original no sera modificada
1)______________

toUpperCase()->Devuelve la cadena a mayuscula
*/

// let cadenaMayuscula= cadena.toUpperCase();

// console.log(cadena.toUpperCase( ));
// console.log(cadenaMayuscula);


/*
2)______________

  toLowerCase()-> Devuelve la cadena
en minuscula*/

// console.log(cadena.toLowerCase());

// let cadena="Hola Mundo";

/*
3)_______________

indexOf(string) -> Devuelve la posicion en la que
se encuentra el String, si no lo encuentra
devuelve -1
*/



// console.log(cadena.indexOf("Hola"))
// console.log(cadena.indexOf("o"))

/*
4)___________________-

    replace(Valor a buscar, valor nuevo)-> Reemplaza el fragmento
    de la cadena que le digamos y pone el valor nuevo

*/
// console.log(cadena.replace("Hola", "Youtube"));

// let cadena="Hola Mundo";

/*
4) substring(inicio[,fin])-> extrae los caracteres desde
inicio hasta fin (el final no se incluye)
Si no se incluye el fin extrae hasta el final

*/
// console.log(cadena.substring(3));
// console.log(cadena.substring(5,10));

/* 
5)slice (inicio[,fin])->Es similar a substring pero admite valores 
negativos, si ponemos valores negativos comenzara desde atras
Si no se incluye el final extrae hasta el final

    (2,-4) ->Em pieza a contar desde el tercer caracter y los 4 ultimos
    no los considera

*/

// console.log(cadena.slice(2));
// console.log(cadena.slice(-3));
// console.log(cadena.slice(0,-3));
// let cadena="Hola Mundo";
/* 
6) trim()->Elimina los espacios al inicio y al final de la cadena.
comienza con ese valor. Devuelve True o False.

*/

// let cadena2="  Youtube, estamos trabajando con cadenas     ";

// console.log(cadena2.trim());


/*
7)--ES6--
  starwith(valor[,inicio])-->sirve para saber si la cadena
  comienza con ese valor. Devuelve true o false
 */

  // console.log(cadena.startsWith("h"))
  // console.log(cadena.startsWith("H"))
  // console.log(cadena.startsWith("M",5))

  let cadena="Hola Mundo";
/*

8)--ES6--
  endwith(valor[,longitud])-->sirve para saber si la cadena
  termina con ese valor. Devuelve true o false
 */
// console.log(cadena.endsWith("o"));
// console.log(cadena.endsWith("a",4));
// console.log(cadena.endsWith("n",8));
// console.log(cadena.endsWith("Mundo"));


/*
9)includes (valor[,inicio])--> igual que el indexof pero devuelve
True o False

 */
// console.log(cadena.includes("Mundo"))
// console.log(cadena.includes("a", 3))
// console.log(cadena.includes("a", 6))

/*
10)repeat(valor)-->Repite el string el numero de veces que le indiquemos
*/


// let cadena3="hola"
// console.log(cadena3.repeat(5));
// console.log("JAJA".repeat(5));

/* 
11) Template string
*/

let nombre = "Juan";
let apellido ="Gomez";
let edad =34;

console.log("Hola "+nombre +" " +apellido+" "+"tienes "+edad+" "+"años");

console.log( ` hola ${nombre} ${apellido} tienes ${edad} años`);
console.log( ` hola ${nombre} ${apellido}. El año que viene tendras ${edad+1} años`);
