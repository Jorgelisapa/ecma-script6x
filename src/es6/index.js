// Class: Default params and concatenation - v2
// (We execute code blocks using 'code runner')

// DEFAULT PARAMS
//  Before ECMAscript 6x...
function newFunction(name, age, country) {
    var name = name || 'Jorge';
    var age = age || 32;
    var country = country || 'COL';
    console.log(name, age, country);
}

//Now with ECMAscript 6x...
function newFunction2 (name = 'Jorge', age = 32, country = 'COL') {
        console.log(name, age, country);
}
// Ways to call the function
newFunction2();  // Default call
newFunction2('Adriana', 23, 'COL');  // Custom parameters




//TEMPLATE LITERALS
//Before...
let hello = 'Hello';
let world = 'World';
let epicPhrase =  hello + ' ' + world;
console.log(epicPhrase);


// Whit ECMAscript 6x...
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);




// Class: LET, CONST, multiline, Spread operator and destructuring - v3

//Multiline
//Before...
var lorem = 'Esta es una frase super buena mostando la forma anterior a es6x de como separar lineas de texto \n' 
+ 'para este proyecto.'
console.log(lorem)

// Now with es6x...
let lorem2 = `Esta es una nueva version para hacer este tipo de cosas como separar lineas de texto. 
Que te parece?`;
console.log(lorem2)


//DESTRUCTURING
let person = {
    'name': 'Jorge',
    'age': 32,
    'country': 'COL'
}
// Before...
console.log(person.name, person.age, person.country);
//Destructure elements es6x...
let { name, age, country } = person;
console.log(name, age);



// SPREAD OPERATOR (Operador de propagación)
let team1 = ['Jorge', 'Diego', 'Pali'];
let team2 = ['Banzell', 'Megan', 'Ballack'];

let education = ['Omar', ...team1, ...team2];

console.log(education);



// VAR or LET
//Before...
{
    var globalVar = 'globar var';
}
console.log(globalVar);


//Now with es6x - The scope or context gives up to the code block itself
{
    let globalLet = 'global let';
    console.log(globalLet);
}

// Before...
var a = 'b';
a = 'a';
console.log(a);

// Now with es6x
// In this way the variable does not change since it is constant
const a = 'b';
a = 'a';
console.log(a);




// Class: Arrow functions, Promises, Parameters in objects - v4


// ENHANCED OBJECT PROPERTY


let name = 'Jorge';
let age = 32;
// Before with es5x...
obj = {name: name, age: age };
console.log(obj)

// Now with es6x...
obj2 = { name, age };
console.log(obj2)



// ARROW FUNCTIONS
// Sintaxis mas reducida y this no vinculable.

const name = [
    {name: 'Jorge', age: 32, country: 'COL'},
    {name: 'Adriana', age: 23, country: 'COL'},
    {name: 'Banzell', age: 9, country: 'COL'}
]

let listOfNames = name.map(function (item) {
    console.log(item.name);
})

// Now with es6x...
let listOfNames2 = name.map(item => console.log(item.name));

// or
const listOfNames3 = (name, age, country) => {
    ... //Code
}

// Cuando paso un solo elemento
const listOfNames4 = name => {
    ... //Code
}
// Aún más amigable
const square = num => num * num;



// PROMISES
const helloPromise = () => {
    return new Promise((resolve, reject) => {
if (true) {
    resolve ('Hey, thats great!')
} else {
    reject ('Oooh! Nooo')
}
    })
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('hola'))
    .catch(error => console.log(error))