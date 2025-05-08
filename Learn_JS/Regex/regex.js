// May 7th 2025

/* Regular Expression
   - a special syntax to crete a "patter", which you can 
     then use to check against a string, exact text, and more
*/

/* test() Method
   - accepts a string, which is the string to test for, and
     matches that against the regular expression
*/

const regex = /freeCodeCamp/;
const test = regex.test("free");
console.log(test); // false

/* match() Method
   - used with strings to search for a pattern and returns an 
     array of matches, or null if no matches are found
*/

const match = "freeCodeCamp".match(regex);
console.log(match); // [ 'freeCodeCamp', index: 0, input: 'freeCodeCamp', groups: undefined ]

/* replace() Method
   - accepts two arguments, the regular expression to match 
     (or a string), and the string to replace the match with
     (or a function to run against each match)
*/

/* Modifiers
   - often referred to as "flags", modify the behavior of a
     regular expression
*/

const regexI = /freeCodeCamp/i; // insensitive
console.log(regexI.test("FREECODECAMP")); // true
