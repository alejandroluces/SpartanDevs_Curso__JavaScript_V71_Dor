//DOM - Crear e insertar elementos
/*	
Crear un elemento: document.createElement(element);
Escribir texto en un elemento: element.textContent = texto Escribir HTML en un elemento: element.innerHTML = código HTML
Añadir un elemento al DOM: parent.appendChild(element)
Fragmentos de código: document.createDocumentFragment()
*/

const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes',
            'Sábado', 'Domingo', "Valor extra"]
const title = document.getElementById('title') 
const daysList = document.getElementById('daysList') 
const selectDays = document.getElementById('daysSelect')
/* 
const itemList= document.createElement("LI")
itemList.textContent= "Luces"

daysList.appendChild(itemList)
*/

title.innerHTML= "<span>DOM - SP Crear e insertar elementos I</span>"

const fragment=document.createDocumentFragment()

// for(const day of days){
//     const itemList= document.createElement("LI")
//     itemList.textContent= day
//     fragment.appendChild(itemList)

// }

for(const day of days){
    const selectItem=document.createElement("option")
    selectItem.setAttribute("value",day.toLocaleLowerCase())
    selectItem.textContent=day
    fragment.appendChild(selectItem)
}


// daysList.appendChild(fragment)
selectDays.appendChild(fragment)



