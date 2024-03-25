const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve("heyy!!")
        } else {
            reject("whoopps!")
        }
    })
}

const mypromises = new Promise((resolve, reject) => {
    let prueba = false;
    if(prueba){
        resolve("heyy")
    } else {
        reject("whopps")
    }
});

mypromises.then((resultado) => {
    console.log(resultado)
}).catch((error) => {
    console.log(error)
});

anotherFunction()
    .then(Response => console.log(Response))
    .catch(err => console.log(err));


//ejemplo youtube 
const data = [{
    title: "aprendiendo JavaScript",
    year: "2021",
    isbn: "0120.246.2",
    author: "Carlos"
}, {
    title: "react.js",
    year: "2022",
    isbn: "41",
    author: "carlos"
}, {
    title: "clean js",
    year: "16541",
    isbn: "5416",
    author: "Daniel"
}
]

// function the retard

function getdata() {
    return data;
}
console.log(getdata());

//promesa, resultado de una operacion asincrona 
//pendiente 
//cumplida
//rechazada

let miPromesa = new Promise((resolve, reject) => {
    // realizar una operacion asincrona
    let exito = false;
    if (exito) {
        resolve("operacion exitosa");
    } else{
        reject("operacion fallida");
    }
});

console.log(miPromesa);
//then y caht para atrapar valores cuando fallan y cuando no 

miPromesa.then((resultado) => {
    console.log(resultado);
}).catch((error) => {
    console.log(error);
});

//callback con funcion set timeout 

setTimeout(function(){
    console.log("hola despues de 3 segundos")
}, 3000);

//ejemplo de funcion asincronica con await
async function obtenerdatos() {
    let respuesta = await fetch('https://api.example.con/data');
    let datos = await respuesta.json();
    return datos;
}

async function ejemplo() {
    let resultado = await miPromesa;
    console.log(resultado);
}