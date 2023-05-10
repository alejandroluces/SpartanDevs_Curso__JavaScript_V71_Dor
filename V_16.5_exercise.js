const colores=["Azul", "Amarillo", "Rojo", "Verde", "Rosa"];

const color=prompt("Introduce un color")

if(colores.indexOf(color)!==-1){
    console.log("El color se encuentra dentro del arreglo definido");
}else{
    console.log("El color NO se encuentra definido");
}