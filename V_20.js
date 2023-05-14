/* 

class Libro {
    constructor(titulo, autor, ano, genero) {
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
        this.genero = genero;
    }

    obtenerInfo() {
        return `Título: ${this.titulo}\nAutor: ${this.autor}\nAño: ${this.ano}\nGénero: ${this.genero}`;
    }
}

let libros = [];

for (let i = 0; i < 3; i++) {
    let titulo = prompt("Introduce el título del libro:");
    while (titulo == '') {
        titulo = prompt("El título del libro no puede estar vacío. Por favor, vuelve a introducirlo:");
    }

    let autor = prompt("Introduce el autor del libro:");
    while (autor == '') {
        autor = prompt("El nombre del autor no puede estar vacío. Por favor, vuelve a introducirlo:");
    }

    let ano = prompt("Introduce el año del libro:");
    while (!/^[\d]{4}$/.test(ano)) {
        ano = prompt("El año debe ser un número de 4 dígitos. Por favor, vuelve a introducirlo:");
    }

    let genero = prompt("Introduce el género del libro (aventuras, terror, fantasia):");
    while (!["aventuras", "terror", "fantasia"].includes(genero)) {
        genero = prompt("El género debe ser 'aventuras', 'terror' o 'fantasia'. Por favor, vuelve a introducirlo:");
    }

    libros.push(new Libro(titulo, autor, ano, genero));
}

function mostrarLibros() {
    for (let libro of libros) {
        console.log(libro.obtenerInfo());
    }
}
mostrarLibros()



function mostrarAutoresOrdenados() {
    let autores = libros.map(libro => libro.autor);
    autores.sort();
    for (let autor of autores) {
        console.log(autor);
    }
}
mostrarAutoresOrdenados()



function mostrarLibrosPorGenero() {
    let genero = prompt("Introduce el género del libro (aventuras, terror, fantasia):");
    for (let libro of libros) {
        if (libro.genero == genero) {
            console.log(libro.obtenerInfo());
        }
    }
}
mostrarLibrosPorGenero()

*/



//Otra manera de hacer el ejercicio



class Book{
    constructor(title, author, year,gender)
    {
        this.title = title
        this.author = author
        this.year = year
        this.gender = gender

    }
    getAuthor (){
        return this.author
    }
    getGender(){
        return this.gender
    }


    bookInfo(){
        return `${this.title} es un libro de ${this.gender} escrito por ${this.author} en año ${this.year}`
    }
}
// aqui finaliza el constructor


let books=[]
// Con este codigo nos aseguramos que sean tres data para cada uno de los prompt
while(books.length<3){
    let title= prompt("Introduce el titulo del libro")
    let author= prompt("Introduce el autor del libro")
    let year= prompt("Introduce el año de edicion del libro")
    let gender= prompt("Introduce el genero del libro").toLowerCase()

    //Para evitar que los campos no esten vacios

    if(title !="" && 
        author !="" && 
            !isNaN(year)&& 
                year.length==4 && 
                    (gender== "Aventura" || 
                        gender== "Terror" ||
                            gender== "Fantasia")){

                            

        books.push(new Book(title,author,year,gender))
    }
                                
}

const showAllBooks=() =>{
        console.log(books);
    
}

const showAuthor=()=>{
    let authors=[]
    
    for (const book of books){
        authors.push(book.getAuthor());
    }
    console.log(authors.sort());
}

const showGender =()=>{
    const gender = prompt(`Introduce el genero a buscar`)

    for (const book of books){
        if (book.getGender()== gender){
        console.log(book.bookInfo())
        }
    }
    
}

// showAllBooks()
// showAuthors()
showGender()







