//fnAsync s
const fnAsync = () => {
    return new Promise((resolve, reject) => {
        //else ternario ? = true : = verdadero
        (true)
         ? setTimeout(() => resolve("AsinC!!"), 2000)
         : reject(new Error("error!"))
    });
}

//identificar el asincronismo 
const anotherfunction = async() => {
    const something = await fnAsync(); //espera await ala funcion
    console.log(something);
    console.log("hola");
}

console.log("despues");
anotherfunction();
console.log("antes");

//await espera a async, async siempre se ejecuta con la promesa
