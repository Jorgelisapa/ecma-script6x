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

