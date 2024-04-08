//obtener una seie de valores egun el algoritmo dado iterador personalizado 
function* iterate(array) {
    for(let value of array) {
        yield value; //retorna valores
    }
}

const it = iterate(["Daniel", "Ana", "jenny", "Aracely", "Miriam"]);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value); //next es un metodo