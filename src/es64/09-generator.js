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

// Create a generator function with multiple yields
function* generatorFunction() {
    yield 'Neo'
    yield 'Morpheus'
    yield 'Trinity'
  
    return 'The Oracle'
  }
  export function* getId() {
    let catID = 1;
    while (true) {
      yield catID++
  }
};
const id = getId()
id.next().value
id.next().value
id.next().value