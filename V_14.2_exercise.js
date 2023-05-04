
// Funciones para calcular el área de cada figura
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
  }
  
  function areaRectangulo(base, altura) {
    return base * altura;
  }
  
  function areaCirculo(radio) {
    return Math.PI * Math.pow(radio, 2);
  }
  
  // Preguntar al usuario qué figura desea calcular
  const figura = prompt("¿Qué figura desea calcular el área? (triángulo, rectángulo, círculo)");
  
  switch (figura.toLowerCase()) {
    case "triángulo":
      const baseTriangulo = parseFloat(prompt("Ingrese la base del triángulo"));
      const alturaTriangulo = parseFloat(prompt("Ingrese la altura del triángulo"));
      const areaT = areaTriangulo(baseTriangulo, alturaTriangulo);
      console.log(`El área del triángulo es: ${areaT}`);
      break;
  
    case "rectángulo":
      const baseRectangulo = parseFloat(prompt("Ingrese la base del rectángulo"));
      const alturaRectangulo = parseFloat(prompt("Ingrese la altura del rectángulo"));
      const areaR = areaRectangulo(baseRectangulo, alturaRectangulo);
      console.log(`El área del rectángulo es: ${areaR}`);
      break;
  
    case "círculo":
      const radioCirculo = parseFloat(prompt("Ingrese el radio del círculo"));
      const areaC = areaCirculo(radioCirculo);
      console.log(`El área del círculo es: ${areaC}`);
      break;
  
    default:
      console.log("Figura no válida");
  }
  