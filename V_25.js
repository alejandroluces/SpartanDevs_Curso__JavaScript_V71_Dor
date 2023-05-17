/*
Atributos
    element.getAttribute('attribute') 
    element.setAttribute('attribute', value)
Clases
    element.dassList.add('class','class',...) e
    lement.classList.remove('class','class',...) 
    element.classList.contains('class') 
    element.classList.replace('oldClass', newClass)


    element.classList.toggle('class'[,force]) 

atributos directos
*/



/* 
Atributos
    element.getAttribute('attribute') 
    element.setAttribute('attribute', value)
*/

const title= document.getElementById("title")
const name= document.getElementById("name")

// console.log(title);
// console.log(name);
// console.log(name.getAttribute("type"));

name.setAttribute("type","text")
console.log(name.getAttribute("type"));

/*
Clases
    
     
    element.classList.toggle('class'[,force]) 
    element.classList.contains('class') 
    element.classList.replace('oldClass', newClass)
    */


    // element.dassList.add('class','class',...) 
    title.classList.add("MainTitle")
    console.log(title);
    console.log(name);

    // lement.classList.remove('class','class',...)

    title.classList.remove("MainTitle")

    // element.classList.contains('class') 
    if(title.classList.contains("title")) console.log("Title tiene la clase title")
     
    else console.log("Title no tiene la clase title");

    // console.log(title);
    // console.log(name);
     

    // element.classList.replace('oldClass', newClass)

    // title.classList.replace('title', "new-main")


    // atributos directos

// console.log(title.innerHTML);
// console.log(title.textContent);

console.log(name.value.length);



