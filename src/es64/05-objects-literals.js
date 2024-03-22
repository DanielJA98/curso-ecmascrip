// enahced literal 
//hacer una funcion y retornar ojetos asignando valore s

function newUer(user, age, country){
//se reasigan valores, cuando se tienen el mismo valor se puede omitir
//la reasignacion 
    return{
        user: user,
        age: age,
        country: country
    }
}

//nueva forma 
function nuevoUsuario(usuario, edad, ciudad, uId){
    //devuelve un objeto
    return{
        usuario,
        edad,
        ciudad,
        id: uId
    }
}

console.log(nuevoUsuario("mexico", "tlaxcala", 15, 7));

//el resultado es el mismo pero sin repetir palabras
//evitael orden de los paraetros mediante RORO
//recibir objeto, retornar objeto 
function newUser({
    user,
    age,
    country,
    uId
}) {
const public = {
    user,
    age,
    country,
    uId
}

return public

}

const edier = newUser ({
    user: "Edier",
    age: 17,
    country: "co",
    uId: 1
});

console.log(edier);

const luis = newUser({
    country: "VE",
    age: 18,
    user: "Luis",
    uId: 3
});
console.log({edier, luis});