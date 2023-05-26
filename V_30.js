/*
Insertan y eliminar elementos II

    parent.insertBefore(newElement, referenceElement) - Insertar un 
    elemento antes del elemento de referencia

    SOPORTE TOTAL
    parent. insertAdj acent Element (posit ion., element) 
    parent.insertAdjacentHTML(position., HTML) 
    parent.insertAdjacentText(position, text)

    positions :
        beforebegin - Antes de que empiece (hermano anterior) 
        afterbegin - después de que empiece (primer hijo) 
        beforeend - antes de que acabe (último hijo) 
        afterend - después de que acabe (hermano siguiente)

    parent.replaceChild(newChildj oldchild) - Reemplaza un hijo por otro
*/

const list = document.getElementById("list")
const newElement=document.createElement("li")
newElement.textContent= "Im a new Element"

// parent.insertBefore(newElement, referenceElement) -  
// Insertar un elemento antes del elemento de referencia
// Ejemplo

// list.insertBefore(newElement, list.children[1])


// SOPORTE TOTAL
//     parent. insertAdj acent Element (posit ion., element) 
// Ejemplo
// list.insertAdjacentElement("beforebegin",newElement)



// positions :
//         beforebegin - Antes de que empiece (hermano anterior) 
// ejemplo

// list.children[0].insertAdjacentElement("beforebegin",newElement)

// positions :
//         afterbegin - después de que empiece (primer hijo) 
// Ejemplo

// list.insertAdjacentElement("afterbegin",newElement)

// positions :
// beforeend - antes de que acabe (último hijo) 
// Ejemplo
// list.insertAdjacentElement("beforeend",newElement)

// positions :
        // afterend - después de que acabe (hermano siguiente)
        // ejemplo

        // list.children[0].insertAdjacentElement("afterend",newElement)

// SOPORTE TOTAL
    // parent.insertAdjacentHTML(position., HTML) 
    // parent.insertAdjacentText(position, text)
/* 
    list.children[1].insertAdjacentHTML("afterend","<li>Elemento con HTML</li>")
    list.children[1].insertAdjacentText("afterend","<li>Elemento con HTML</li>")
*/

    // parent.replaceChild(newChildj oldchild) - Reemplaza un hijo por otro
// Ejemplo

    // list.replaceChild(newElement,list.children[1])

/* 

DOM manipulation convenience methods - UQuery Like 
https ://caniuse.com/#search=jQuery-like

positions :
parent.before() - Antes de que empiece (hermano anterior) 
parent.prepend() - después de que empiece (primer hijo) 
parent.append() - antes de que acabe (último hijo) 
parent.after() - después de que acabe (hermano siguiente)

child.replac^With(newChild)
*/

// positions :
// parent.before() - Antes de que empiece (hermano anterior)
// Ejemplo

// list.children[1].before(newElement) 

// // positions :
// parent.prepend() - después de que empiece (primer hijo)
// ejemplo
// list.prepend(newElement)


// positions :
// parent.append() - antes de que acabe (último hijo) 
// Ejemplo

// list.append(newElement)

// positions :
// parent.after() - después de que acabe (hermano siguiente)
// Ejemplo
// list.children[1].after(newElement)

// child.replac^With(newChild)
// Ejemplo
// list.children[0].replaceWith(newElement)



/* 

Clonar y eliminar elementos
element.cloneNode(trueI false) - Clona el nodo. Si le pasamos
true clona todo el elemento con los hijos, si le pasamos
false clona solo el elemento sin hijos
element.remove() - Elimina el nodo del DOM
element.removeChild(child) - Elimina el nodo hijo del DOM

*/
// element.cloneNode(trueI false) - Clona el nodo. Si le pasamos
// Ejemplo
// list.after(list.cloneNode(true))

// element.remove() - Elimina el nodo del DOM
// Ejemplo

// list.remove()

// element.removeChild(child) - Elimina el nodo hijo del DOM
// Ejemplo
list.removeChild(list.children[0])
