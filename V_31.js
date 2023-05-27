/*
Objeto window - Es el objeto global, de él descienden todos 
los objetos
    alert() 
    promt() 
    confirmo()

*/
// confirmo()
// Ejemplo
/* 
if(confirm("acepta")){
console.log("El asuario acepto");
}else{
    console.log('El usuario no acepto');
    
}
*/



// alert("hola")
// addEventListener("scroll",(e)=> {
//     console.log(e)
      
// })


/* Objeto console - Es el objeto que contiene la consola del 
navegador
    https ://developer.mozilla.org/es/docs/Web/API/Console
    console.log()
    console.dir()
    console.error()
    console.table()
*/

// console.error('Alerta');




const person={
    name:"Leonardo",
    age:35,
    email:"leov5515@gmail.com"

}
console.table(person)

/* Objeto location - Es el objeto que contiene la barra de 
direcciones
https ://developer.mozilla.org/es/docs/Web/API/Location
location.href
location.protocol
location.host
location.pathname
location.hash
location.reload()
*/
/* 
console.log(location.href);
console.log(location.protocol);
console.log(location.host);
console.log(location.pathname);
console.log(location.hash);

*/

// location.reload()
// location.href="https://google.cl"



/* Objeto history
https ://developer.mozilla.
org/es/docs/DOM/Manipulando_el_historial_del_navegador
history.back()-->Nos lleva hacia atras pagina anterir 
history.forward() -->Nos lleva hacia delante pagina que visiatmos 
anteriormente

go(nI-n)
length
*/


/* Objeto date
https ://developer.mozilla.
org/es/docs/Web/3avaScript/Referencia/0bjetos_globales/Date
https ://www.w3schools.com/jsref/jsref_obj_date.asp
*/
/* 
const date=new Date()
console.log();
*/
/*
Timers

Timeout :
https ://developer.mozilla.org/en-US/docs/Web/API/WindowOrW
orkerGlobalScope/setTimeout
setTimeout (( ) = >{code}, delay-in-miliseconds) - Hace que 
se ejecute la función despues de delay. Si lo referenciamos 
mediante una variable/constante podemos pararlo con 
clearTimeout(referencia)

Interval:
https ://developer.mozilla.org/en-US/docs/Web/API/WindowOrW
orkerGlobalScope/setlnterval
setlnterval(()=>{code}, delay-in-miliseconds) - Hace que se 
ejecute la función cada delay milisegundos. Si lo referenciamos 
mediante una variable/constante podemos pararlo con 
clearlnterval(referencia)
*/
// Ejemplo:
/* 
button.addEventListener("click", ()=>{
    setTimeout(saludar,3000)
})
*/

const saludar =() =>{
console.log("Hello");
}
let cont=0

// const interval=setInterval(saludar, 3000)
/* 
setInterval(()=>{
    console.log(cont)
    cont++
    
},10000)
*/
const interval = setInterval(() => { 
    console.log(cont) 
    cont++
}, 1000)
button.addEventListener('click', () => {
    clearInterval(interval)
})


