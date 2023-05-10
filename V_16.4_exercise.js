const palabra= prompt("Introduce una palabra").toLocaleLowerCase()

let consonante=0;
let vocales=0;

for( const letra of palabra){
    if(letra=="a" || letra=="e" || letra=="i"||letra=="o" || letra=="u") vocales++
    else consonante++
}

console.log(`Tu palabra ${palabra} tiene ${vocales} vocales,  
${consonante} consonantes y ${palabra.length} letras`);