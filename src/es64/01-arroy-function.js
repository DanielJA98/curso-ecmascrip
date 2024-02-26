//funcion con sintaxis normal nombre, parametos, bloque de codigo 

function square(num) {
    return num * num;
}

//funcion flecha por medio de const variable, parametros, flecha y codigo
const square = (num) => {
    return num * num;
}
//arrow funciton, se quitan parentesis por un solo parametro y handerbars
const square = num => num * num;

function sum(b){
    return b +5;
}

console.log(sum(7));

sum = (a,b) => a+b+5;
console.log(sum(7,5));

//antes
var saludo = function(nombre){
    return "hola " + nombre;
};

console.log(saludo("daniel"));

//ahora
const salud = nombre => "hola"+nombre;
console.log(salud("Daniel"));

//funcion con varios parametros 
var sumar = function(a,b){
    return a * b;
};
console.log(sumar(3,3));

//ahora 
const sumar = (a,b) => a * b;
console.log(sumar(7, 3));

//funcion sin parametros 
//antes
var saludo = function(){
    return "hola a todos";
};
console.log(saludo());

//ahora 
const saludo = () => "hola a todos";
console.log(saludo());

//funcion con cuerpo 
//cuando la funcion tiene mas de una linea o no devuelve un valor es 
//necesario utilizar parentesis 
var fecha = new Date();
hora = fecha.getHours();

var saludo = function(hr){
    if (hr <= 5) {
        return "no me molestes";
    } else if(hr >= 6 && hr <= 11){
        return "buenos dias";
    } else if (hr >= 12 && hr <= 18) {
        return "Buenas tardes !!!";
    } else {
        return "buenas noches!!";
    }
}
console.log(saludo(hora));

//ahora 
let fecha = new Date();
hora = fecha.getHours();
let saludo = (hr) => {
    if (hr <= 5) {
        return "no me molestes";
    } else if (hr >= 6 && hr <= 11){
        return "Buenos Dias";
    } else if (hr >= 12 && hr <= 11) {
        return "Buenas tardes !!"
    } else {
        return "Buenas Noches!!"
    }
}
console.log(saludo(hora));

//antes numero 
var numeros = [1, 2, 3, 4, 5];
numeros.forEach(function(num) {
    console.log(num); //imprime el numero en turno 
    console.log(num * 10); //Imprime en turno por 10
});

//ahora 
let numeros = [1, 2, 3, 4, 5];
numeros.forEach((num)=> {
    console.log(num); //imprime el numero en turno
    console.log(num * 10);
});