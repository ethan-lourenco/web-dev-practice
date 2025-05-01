// April 30th 2025

/* Infinity
   - used to represent numbers that are beyond
     the maximum limit
*/

/* Type Coercion
   - when a value from one data type is converted into
     another data type
*/

const result1 = 5 + "10";
console.log(result1); // Output: 510 (type = string)

const result2 = true + 1;
console.log(result2); // Output: 2

const result3 = false + 1;
console.log(result3); // Output: 1

const result4 = "Hello" + true;
console.log(result4); // Output: "Hellotrue"

/* Operator Precedence
   - determines the order in which operations are evaluated
     in an expression
*/

const res = 2 + 3 * 4;
console.log(res); // Output: 14

// Prefix/Postfix
++x;
y++;

// Unary Operators

const str = "42";
const strToNegativeNum = -str;
console.log(strToNegativeNum); // -42
console.log(typeof strToNegativeNum); // number

let isOnline = true;
console.log(!isOnline); // false

const num = 5;
console.log(~num); // -6
// ~ inverts binary representation

// Ternary operator
// condition ? expressionIfTrue : expressionIfFalse;

const temp = 30;
const weather = temperature > 25 ? "sunny" : "cool";
console.log(`It's a ${weather} day!`); // It's a sunny day!

/* Math.random()
   - generates a random floating-point number between 0 (inclusive)
     and 1 (exclusive)
*/
