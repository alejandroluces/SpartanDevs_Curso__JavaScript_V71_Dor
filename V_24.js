/*
document.getElementById('id') - Acceder a un elemento a través de su id

document.querySelector('selectorCSS') - Accede al primer elemento que coincida 
    con el selector CSS

document.querySelectorAll('selectorCSS') - Accede a todos los elementos que coincidan 
    con el selector CSS, devuelve un nodeList 

*/

// document.getElementById('id') - Acceder a un elemento a través de su id
/* 
const title= document.getElementById("title")
title.textContent= "DOM - Acceder a elementos"
*/

// document.querySelector('selectorCSS') - Accede al primer elemento que coincida 
// con el selector CSS
/*
const paragraph = document.querySelector(".paragraph::after ") 
console.log(paragraph);

*/
/* 
const paragraph = document.querySelector(".paragraph") 
const span=paragraph.querySelector("span")
console.log(span.textContent);
*/
const paragraph = document.querySelector(".paragraph") 
const span=document.getElementById("title").querySelector("span")
console.log(span.textContent);


// document.querySelectorAll('selectorCSS') - Accede a todos los elementos 
// que coincidan 
//     con el selector CSS, devuelve un nodeList 

const paragraphs=document.querySelectorAll(".paragraph")
console.log(paragraphs);

paragraphs[0].style.color="red"

const paragraphsArray= document.querySelectorAll(".paragraph")
const paragraphsSpread= [...document.querySelectorAll(".paragraph")]

paragraphsSpread.map(p=>p.style.color="green")
console.log(paragraphs);
