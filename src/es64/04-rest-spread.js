//arrays destructuring

let fruits = ["Apple", "Banana"];
let [d, c] = fruits;
console.log(a, fruits[1]);

// object destructuring
let user  = {username: "oscar", age: 34 }
let {username, age} = user;
console.log(username, age);
console.log(username, user.age);

sum(78, 3, 4, 5, 10, 1, 2);

//para strings 
const array = [..."hola"];
//para array 
const otherArray= [...array];
console.log(array)
console.log(otherArray);

let originalArra = [1,2,3,4,5]
const copyArray = originalArray
copyArray[0] = 0

console.log(originalArray);
console.log(originalArray === copyArray);

let originalArray = [1, 2, 3, 5];
const copyArray = [...originalArray];
copyArray[2] = 0

console.log(originalArray);
console.log(copyArray);
console.log(originalArray === copyArray);


let json1 = {
  name: "mr. michi",
  food: "pesacado"
}

let json2 = {
  name: "bigotes",
  food: "pollito"
}

var defaul = {
  age: 12,
  color: "white"
}

let copyobject = {...json2, ...defaul};

console.log(copyobject)

function solution (jason1, json2) {
  let copyobject = {...json2};
  let respuesta = json1 + json2;
  console.log = ({...jason1, ...json2});
}

function solution(json1, json2) {
  let json1 = {
    name: "Mr. michi",
    food: "Pescado"
  }
  let json2 = {
    age: 12,
    color: "blanco"
  }
  let union = { ...json1, ...json1 };
  return union;
}

solution({name: "bigotes", food: "pollito"})

function solution(
  json1 = {
    name: 'Mr. Michi',
    food: 'Pescado',
  },
  json2 = {
    age: 12,
    color: 'Blanco',
  }
) {
  return { ...json1, ...json2 };
}

console.log(solution())
// prueba para enviar a git


// se crea el array 
let frutas = ["Platano", "Manzana", "Pera", "Melon", "Sandia"];
// se reasignan las variables para la nueva identificacion de los elementos del aray 
// otra forma de llammar es por nombredelarray[#posicion a recuperar]
let [Fruta1, Fruta2 , ...rest] = frutas;
console.log(frutas[3]);

// con objetos 
// se crea el objeto 
// fomas de acceder al valor variable declaradao por medio de usuario.name
//nombredelobjeto.nombredelainformacion
let usuario = {name: "Daniel", edad: 25, ciudad: "tlaxcala"};
let {name, edad, ciudad} = usuario;
console.log(edad, name, usuario.edad);

let a = 1;
let b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1

const arr = [1, 2, 3];
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr); // [1, 3, 2]

//spread operador (operador de propagación)
//crear variable con un objeto 
let person = {name: "Daniel", age: 12}