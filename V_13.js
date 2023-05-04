/* 
Determinados

bucle for of / for in

for(let variable of estructura){ 
    Código a ejecutar
}

Palabra reservadas de bucles

    Break - Rompe bucle
    continue - Se salta las posiciones que le indicquemos y despues 
                contunua su ejecucion

*/


let names=["Alejandro","Sara","Angely","Blanca","Gabriel"]

for (let i = 0; i < names.length; i++){ 
    if(names[i]=== 'Angely' ) {
        break
    }
    console.log(names[i]);
    
}


for(let name of names){
    console.log(name);
}

for(let index in names){
    console.log(index);
}

// Otro ejemplo usando el IF
for(let name of names){
    if(name=== 'Angely' ) {
        continue
    }
    console.log(name);
}

// Otro ejemplo usando el IF

for(let index in names){
    if(names[index]=== 'Angely' ) {
        continue
    }

    console.log(index);
}