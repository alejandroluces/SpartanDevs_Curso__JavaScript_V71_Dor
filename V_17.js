const person = {
name:"Juan",
age:26,
sons: ["Laura","Diego","Pepe","Rosa","Tom"]

}

console.log(person.name);
console.log(person["name"]);


for(const key in person){
    console.log(key);
}

for(const key in person){
    console.log(person[key]);
}

for(const sons in person.sons){
    console.log(sons);
}

for(const sons of person.sons){
    console.log(sons);
}
console.log(`Hola ${person.name}, 
tienes ${person.age} años y tus hijos 
se llaman ${person.sons.join(', ')}`);

