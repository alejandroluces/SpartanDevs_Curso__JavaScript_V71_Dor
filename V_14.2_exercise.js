const figura= prompt("¿Qué figura desea calcular el área? (triangulo, rectangulo, circulo)");


switch(figura){
case "triangulo":
    const baseTriangulo=prompt("Ingrese la base del triangulo");
    const alturatriangulo=prompt("Ingrese la altura del triangulo");
    let areaTriangulo= (baseTriangulo*alturatriangulo) / 2;
    const areaT= areaTriangulo;
    console.log(`El area del triangulo es: ${areaT}`)
    break

case "rectangulo":
    const baseRectangulo=prompt("Ingrese la base del rectangulo");
    const alturaRectangulo=prompt("Ingrese la altura del rectangulo");
    let areaRectangulo= (baseRectangulo*alturaRectangulo);
    const areaR= areaRectangulo;
    console.log(`El area del rectangulo es: ${areaR}`)
    break
case "circulo":
    const radioCirculo=prompt("Ingrese el radio del circulo");
    let areaCirculo = (Math.PI * Math.pow(radioCirculo,2));
    areaC= areaCirculo;
    console.log(`El area del circulo es: ${areaC}`);
    break
// Esto es para cuando la palabra de la figura no coincida
    default:
    console.log("Figura no válida");
    
}


/*
const : Nos permite declarar variables inmutables, 
osea no se puede cambiar. var y 
let : Nos permiten crear variables mutables que si se puede cambiar.
*/


// let areaRectangulo= (base*altura);





