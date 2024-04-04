//.this se refiere al objeto que se esa ejecutando
let persona1 ={
    nombre: "juan",
    saludar: () => {
        console.log(`hola mi nombre es ${this.nombre}`);
    }
}

persona.saludar();

let funcionsaludo = persona.saludar;

funcionsaludo();

//una clase es un tipo que sirve como molde para crer objeto
//estructura 
class persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
};
//saludar() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`)


let person1 = new persona ("juan", 30);
let persona2 = new persona("maria", 25);

console.log(person1, persona2)

//platzi 
class user {
    //metodos = funcion asociada a una clase
    gretting() {
        return `hola`;
    }
    despedida() {
        return `adios`;
    }
};

//instancia de una clase 
//const newUser = new user();

const daniel = new user();
console.log(daniel.gretting());
const Jesss = new user();
console.log(Jesss.despedida());

//constructor 
class user {
    //constructor 
    constructor(){
        console.log(`nuevo usuario`);
    }
    gretting() {
        return `hola`;
    }
    despedida() {
        return `adios`;
    }
};

const David = new user();

//constructor se ejecuta de manera automatica 

//referencia de this: hace referencia al elemento padre que lo contiene 

class user {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    //metodo
    speak() {
        return `hello`;
    }
    gretting(){
        return `${this.speak()} ${this.name}`;
    }
};

const anna = new user("ana");
console.log(anna.gretting());

//setters gretters
class user {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    //metodos 
    speak(){
        return `hello`
    }
    gretting(){
        return `${this.speak()} ${this.name}`;
    }

    get uAge() {
        return this.age
    }
    set uAge(n){
        this.age = n;
    }
};
const bebeloper = new user("David", 24);
console.log(bebeloper.uAge);
console.log(bebeloper.uAge = 19);