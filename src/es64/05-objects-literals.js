// enahced literal 
//hacer una funcion y retornar ojetos asignando valore s

function newUser(user, age, country){
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

console.log(nuevoUsuario("daniel", 24, "tlaxcala", 3));

//el resultado es el mismo pero sin repetir palabras