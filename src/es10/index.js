// Que se implementó en es10x? - v10
// METODO FLAT
let array = [1,2,3, [1,2,3, [1,2,3]]]

console.log(array.flat(2))


// METODO FLAT MAP
// Mapear cada elemento, pasar funcion y aplanarlo segun resultado
let array = [1,2,3,4,5,6,7,8,9,10];
console.log(array.flatMap(value => [value, value * 2]))


// trimStart - trimEnd
let hello = '            hello world';
console.log(hello);
console.log(hello. trimStart());

let hello = 'hello world.     ';
console.log(hello);
console.log(hello.trimEnd())


// Optional cath building - try catch
try {

} catch {
    error
}


// fromEntries
// Tranformar clave: valor en un objeto.
let entries = [["name", "jorge"], ["age", 32], ["country", "COL"]];
console.log(Object.fromEntries(entries));



//Objecto de tipo simbolo - symbol
// Permite acceder a una descripción, 
let mySymbol = 'This is mySymbol accedido desde symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description);