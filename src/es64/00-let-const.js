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