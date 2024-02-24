var lastName = "David";
lastName = "Oscar";
console.log(lastName);
//reasignar valores 

let fruit = "apple";
fruit = " kiwui"; 
console.log(fruit);

const animal = "dog";
animal = "cat";
console.log(animal);

const fruit3 ="banana";

let fruit2 = "kiwi";
console.log(fruit2);
const fruits = () => {

    if(true) {
        var fruit1 = "apple"; //function scope
        let fruit2 = "kiwi"; // block scope
        const fruit3 ="banana"; //block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();

var prueba = 3;
console.log(prueba);

let prueba1 = 15;
prueba1 = 19;
console.log(prueba1);

// Declaración de variables
var nameVar ;
console.log(nameVar);4

let nameLet;
console.log(nameLet);

const varconsts = 1;
const varconsts = 5;
console.log(varconsts);

// Asignación de variables
nameVar= "soy var";
nameLet = "soy let";

var nameVar = 
console.log(nameVar);
console.log(nameLet);

//ejemplo de re-declaracion de variables
var nameVar="soy var"
let nameLet = "soy ley";
let nameLet
