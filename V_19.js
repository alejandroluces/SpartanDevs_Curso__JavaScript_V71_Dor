class Persona{
    constructor(nombre,apellido,edad){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad

        this.datos =`Me llamo ${nombre} ${apellido} y tengo ${edad} años`
    }
    saludar(){
        return  `Me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años`
    }
}




const juan = new Persona("Juan", "Garcia", 25);
const martha = new Persona("Martha", "Garcia", 35);

console.log(juan);
console.log(juan.saludar());
console.log(martha.saludar());