//Recorrer el DOM (DOM Traversing)
/*
Padre - parent (Nodo del que desciende)
•	parentNode - Devuelve el nodo padre (que puede no ser un elemento)
•	parentElement - Devuelve el nodo elemento padre
NOTA
Los nodos del tipo Document y DocumentFragment nunca van a tener un 
elemento padre, parentNode devolverá siempre null.

Hijos - child (Nodo que desciende de un padre)
•	childNodes - Devuelve todos los nodos hijos
•	children - Devuelve todos los nodos elementos hijos
•	firstChild - Devueleve el primer nodo hijo
•	firstElementChild - Devueleve el primer nodo elemento hijo
•	lastChild - Devueleve el último nodo hijo
•	lastElementChild - Devueleve el último nodo elemento hijo
•	hasChildNodes() - Devueleve true si el nodo tiene hijos y false si no tiene
Hermanos - siblings (Nodo al mismo nivel)
•	nextSibling - Devuelve el siguiente nodo hermano
•	nextElementSibling	*
•	previousSibling
•	previousElementSibling
Cercano
•	closest(selector) - Selecciona el nodo más cercano que cumpla 
    con el selector, aún es experimental.
*/

const parent = document.getElementById('parent')
/* 
Padre - parent (Nodo del que desciende)
•	parentNode - Devuelve el nodo padre (que puede no ser un elemento)
•	parentElement - Devuelve el nodo elemento padre
*/
// Ejemplo

/* 
console.log(parent.parentElement);
console.log(parent.parentNode);

console.log(document.parentNode);
*/

// •	children - Devuelve todos los nodos elementos hijos
console.log(parent.children);
 
// firstChild - Devueleve el primer nodo hijo

console.log(parent.firstChild);

// firstElementChild - Devueleve el primer nodo elemento hijo

console.log(parent.firstElementChild);

// lastChild - Devueleve el último nodo hijo
console.log(parent.lastChild);
console.log(parent.lastElementChild);

// lastElementChild - Devueleve el último nodo elemento hijo
console.log(parent.lastElementChild);
console.log(parent.firstChild.hasChildNodes());

// Hermanos - siblings (Nodo al mismo nivel)

    // •	nextSibling - Devuelve el siguiente nodo hermano
console.log(parent.nextSibling);

    // •	nextElementSibling	
    console.log(parent.nextElementSibling);
    console.log(parent.parentElement.nextElementSibling);
    
    // •	previousSibling
    console.log(parent.parentElement.previousSibling);
     // •	previousElementSibling
    console.log(parent.parentElement.previousElementSibling);

   