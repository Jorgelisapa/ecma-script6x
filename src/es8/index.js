// Que se implementó en es8? - v7

// OBJECT ENTRIES
// El cual permite devolver la clave y los valores de una matriz.

const data = {
    frontend: 'Jorge',
    backend: 'Isabel',
    design: 'Ana'
}

const entries = Object.entries(data);
console.log(entries);
// Cuando queemos saber cuantos elementos tiene nuestro arreglo...
console.log(entries.length);



// OBJECT VALUES
// Devuelve los valores de un objeto a un arreglo.
const data = {
    frontend: 'Jorge',
    backend: 'Isabel',
    design: 'Ana'
}

const values = Object.values(data);
console.log(values);
console.log(values.length);



// PADEND - PADSTART

const string = 'hello';
console.log(string.padStart(7, 'hi'))
console.log(string.padEnd(7, 'hi'))
console.log('food'.padEnd(12, 'hi'))