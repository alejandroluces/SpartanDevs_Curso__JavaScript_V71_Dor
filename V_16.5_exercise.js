let colores=["Azul", "Amarillo", "Rojo", "Verde", "Rosa"];
let lowerCase=colores.map((items)=> items.toLowerCase())
const color=prompt("Introduce un color");

if(lowerCase.indexOf(color)!==-1){
    console.log("El color se encuentra dentro del arreglo definido");
}else{
    console.log("El color NO se encuentra definido");
}

