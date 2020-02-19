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




// Class: ASYNC AWAIT - v8
// es8x

const helloWorld = () => {
 return new Promise((resolve, reject) => {
     (true)  //or false
        ? setTimeout(() => resolve('Hello World'), 3000)
        : reject(new Error('This is an error'))
 })
};

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
};

anotherFunction();