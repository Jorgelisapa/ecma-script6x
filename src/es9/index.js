// Que se implementó en es9x? - v9

// OPERADOR DE REPOSO

const obj = {
    name: 'Jorge',
    age: 32,
    country:'COL'
};

let { name, ...all} = obj;
console.log(name, all);




// Utilidades de propagacion - Uniendo elementos de un objeto a otro objeto
const obj2 = {
    name: 'Jorge',
    age: 32,
};

const obj3 = {
    ...obj2,
    country:'COL'
};
console.log(obj3);



// PROMISE FINALY
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? resolve('Hello World')
            : reject(new Error('Test Error'))
    })
}

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizó'))

// (lamismaa funcion) agregando un setTimeout
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (false)
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject(new Error('Test Error'))
    })
}

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizó'))
    



    // REGEX
    const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
    const match = regexData.exec('2018-04-20');
    const year = match[1]
    const month = match[2]
    const day = match[3]
    console.log(year, month, day);

