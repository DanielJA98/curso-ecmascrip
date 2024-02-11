//arrays destructuring

let fruits = ["Apple", "Banana"];
let [a, b] = fruits;
console.log(a, fruits[1]);

// object destructuring
let user  = {username: "oscar", age: 34 }
let {username, age} = user;
console.log(username, age);
console.log(username, user.age);

//spread operator 
//funcion de propagation o de pasar los valores a un nuevo array 
let person = {name: "oscar", age: 18};
let country = "mx";

let data = {...person, country, id: 3069403};
console.log(data);
console.log(person);

//rest parametrer

function sum(num, ...values){
    console.log(values);
    console.log(num + values[5]);
}

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