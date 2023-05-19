/*
Eventos de ratón:

    click - cuando pulsamos el botón izquierdo del ratón
    dbclick - cuando pulsamos dos veces seguidas el botón izquierdo del ratón
    mouseenter - cuando entramos en la zona que tiene el evento 
    mouseleave - cuando salimos de la zona que tiene el evento 
    mousedown - cuando pulsamos y no soltamos el boton izquierdo del ratón 
    mouseup - cuando soltamos el boton izquierdo del ratón m
    mousemove - cuando movemos el ratón

Eventos de teclado:
    keydown - cuando pulsamos una tecla 
    keyup - cuando soltamos una tecla
    keypress - cuando pulsamos una tecla y no la soltamos
*/



// click - cuando pulsamos el botón izquierdo del ratón
// Ejemplo 

// const button=document.getElementById("button")
// const box=document.getElementById("box")
/* 
 buuton.addEventListener("click",()=>{
        console.log("CLICK");
        
 })

*/
// dbclick - cuando pulsamos dos veces seguidas el botón izquierdo del ratón
// Ejemplo
/* 
 button.addEventListener("dblclick",()=>{
    console.log("DOBLE CLICK"); 
 })
 */
 const button=document.getElementById("button")
 const box=document.getElementById("box")
 const input=document.getElementById("input")

//  mouseenter - cuando entramos en la zona que tiene el evento 
//  mouseleave - cuando salimos de la zona que tiene el evento 
// Ejemplo
/* 
box.addEventListener("mouseenter",()=>{
    box.classList.replace("red","green")
})

box.addEventListener("mouseleave",()=>{
    box.classList.replace("green","red")
    
})
*/



// mousedown - cuando pulsamos y no soltamos el boton izquierdo del ratón 
// mouseup - cuando soltamos el boton izquierdo del ratón m

// Ejemplo


box.addEventListener("mousedown", ()=>{
    console.log("Has Pulsado en la caja");
})
box.addEventListener("mouseup", ()=>{
    console.log("Has soltado el boton izquierdo en la caja");
})

// mousemove - cuando movemos el ratón
// Ejemplo
box.addEventListener("mousemove",()=>{
    console.log("Estas moviendo el raton dentro de la caja");
    
})


// Eventos de teclado:
//     keydown - cuando pulsamos una tecla 
//     keyup - cuando soltamos una tecla
//     keypress - cuando pulsamos una tecla y no la soltamos

input.addEventListener("keydown", ()=>{
    console.log("Has pulsado una tecla");
    
})
input.addEventListener("keydown", ()=>{
    console.log("Has soltado la  tecla");
    
})
input.addEventListener("keydown", ()=>{
    console.log("Estas pulsando una tecla sin soltar");
    
})

