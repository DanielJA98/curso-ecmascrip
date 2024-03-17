function newUser(name, age, country) {
    var name = name || "oscar";
    var age = age || 3;
    var country = country || "mx";
    console.log(name, age, country);
}


newUser();
newUser("David", 15, "colombia");

function newUser(name, age, country) {
    var name = name || "oscar";
    var age = age || 45;
    var country = country || "mexico";
    console.log (name, age, country);
}

newUser();
newUser()
const a = 3;
const b = -2;

console.log(a > 0 || b > 0);
// Expected output: true
function newUser(name, age, country) {
    var name = name || "Àlexa";
    var age = age || 24;
    var country = country || "COL";
    console.log(name, age, country);
}

newUser();
newUser("Oscar", 34, "MX");

function newAdmin(name = "ocar", age = 35, country = "cl") {
    console.log(name, age, country);
}

newAdmin();
newAdmin("miriam", 26, "mexico");


//parametros por deault
//funcion antes de ecma scrip6
function persona(nombre, edad, pais){
    nombre = nombre || "Daniel";
    edad = edad || 25;
    pais = pais || "Mexico";
    console.log(nombre, edad, pais); 
} 

persona();
persona("Luis", 28,"tlaxcala");

//funcion con parametros predeterminados despues de ecmascrip6
//se coloca desde la declaracion de los parametros 

function people(name = "Jesus", age = 30, country = "MX"){
    console.log(name, age, country);
}

people();
people("David", 20);

//spread operator 
//crear variable como objeto 
let persona = {edad: 13, nombre: "Daniel", ciudad: "teolocholco"};
//nueva variable con indicador 
let codigopostal = 90850;

let datos = {...persona, codigopostal};
console.log(datos);

//colocar los datos en la misma variable, para ingresar los nuevos 

let datos2 = {...persona, edad2: 3};
console.log(datos2);

//variables invertidad 
let datos3 = {ead4: 19, ...persona};

//utilizandolos en una  funcion 
function restoperator (valor1, ...valores){
    sum = valor1 + valores;
    console.log(valores)
    return sum + valor1
}

restoperator(1, 3, 5);
//... agarra los valores presentes y los agraga a la variable

function sum (num, ...values) {
    console.log(num);
    console.log(values);
    result = num + values[2];
    console.log(result);
}

sum(1, 1, 2, 3);

function suma(a, b, c) {
    return a + b + c;
}
const numeros = [1, 2, 3, 4];
const resultado = suma(...numeros);
console.log(resultado);