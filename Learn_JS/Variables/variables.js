// April 30th 2025

/* Variable
   - a named container that stores a value of a 
     specific data type
*/

// Declare Variable & Reassignment
let age = 25;
age = 30;

// Data Types

/* Number
   - represents both integers and floating-point numbers
*/

/* String
   - a sequence of characters or text enclosed in quotes
*/

/* Boolean
   - true or false
*/

/* Undefined
   - a variable has been declared but not given a value
*/

/* Null
   - variable has been set to nothing
*/

/* Object
   - holds collections of key value pairs
*/

let book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
};

/* Symbol
   - a special type of value that is always unique and
     can't be changed
*/

const symbol1 = Symbol('mySymbol');
const symbol2 = Symbol('mySymbol');
console.log(symbol1 === symbol2); // Outputs: false

/* BigInt
   - used for very large numbers that exceed limit of number type
*/

const bigNumber = 9238490237409193018039438n;
console.log(bigNumber)
// Outputs: 9238490237409193018039438n

/* typeof Operator
   - an operator that lets you see the data type of a variable
     or value
*/