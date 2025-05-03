// May 3rd 2025

/* Array
   - an ordered collection of values, each identified by 
     a numeric index, an array can be of different data types,
     including numbers, strings, booleans, objects, and even other arrays
*/

let fruits = ["apple", "banana", "orange"];
console.log(fruits[0]); // 'apple'
console.log(fruits.length); // 3

/* push() Method
   - used to add one or more elements to the end of an array, return
     value is new length of the array
*/

const newLength = fruits.push("pear");
console.log(newLength); // 4

/* pop() Method
   - removes the last element from an array and returns that element,
     also modifies the original array
*/

const lastFruit = fruits.pop();
console.log(lastFruit); // 'pear'

/* unshift() Method
   - adds one or more elements to the beginning of an array and returns
     its new length, works similarly to push(), but modifies the start
     of the array instead of the end
*/

let numbers = [2, 3];
let newLen = numbers.unshift(1);
console.log(numbers); // [1, 2, 3]
console.log(newLen); // 3

/* shift() Method
   - removes the first element from an array and returns that element, 
     similar to pop() but works at the beginning of the array instead 
     of the end
*/

let colors = ["red", "green", "blue"];
let firstColor = colors.shift();
console.log(colors); // ['green', 'blue']
console.log(firstColor); // 'red'

// Two-Dimensional Array Example

let chessboard = [
  ["R", "N", "B", "Q", "K", "B", "N", "R"],
  ["P", "P", "P", "P", "P", "P", "P", "P"],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  ["p", "p", "p", "p", "p", "p", "p", "p"],
  ["r", "n", "b", "q", "k", "b", "n", "r"],
];

console.log(chessboard[0][3]); // 'Q'

/* Array Destructuring
   - feature that allows you to extract values from arrays and assign them
     to variables in a more concise and readable way, it provides a convenient 
     syntax for unpacking array elements into distinct variables
*/

let newFruits = ["apple", "banana", "orange"];
let [first, second, third] = newFruits;
console.log(first); // 'apple'
console.log(second); // 'banana'
console.log(third); // 'orange'

// Assign Default Values and Skip Elements
// Use ...rest to store remaining elements as a new array

let nums = [1, 2, 3];
let [one, , three, four = 4] = nums;
console.log(one); // 1
console.log(three); // 3
console.log(four); // 4

// Reversing an Array

/* split() Method
   - divides a string into an array of substrings and specifies where
     each split should happen based on a given separator
*/

let str = "hello";
let charArray = str.split("");
console.log(charArray); // ['h', 'e', 'l', 'l', 'o']

/* reverse() Method
   - reverses an array in place, this means it modifies the original 
     array rather than creating a new one
*/

let reversedArray = charArray.reverse();
console.log(reversedArray); // ['o', 'l', 'l', 'e', 'h']

/* join() Method
   - creates and returns a new string by concatenating all the 
     elements in an array, separated by a specific separator string
*/

let reversedString = reversedArray.join("");
console.log(reversedString); // "olleh"

// Now Cleaned Up
let string = "coding";
let reversed = string.split("").reverse().join("");
console.log(reversed); // gnidoc

/* indexOf() Method
   - useful for finding the first index of a specific element within
     an array, if the element can't be found, it will return -1
*/

/* splice() Method
   - allows you to add or remove elements from any position in an
     array, including the middle, returns array of removed elements

     Syntax:
     array.splice(startIndex, itemsToRemove, item1, item2)
*/

/* includes() Method
   - checks if an array contains a specific value, returns a boolean
     value, true or false
*/

/* Shallow Array Copy
   - a new array that contains references to the same elements as the
     original array
*/

/* The Spread (...) Operator
   - used to create shallow copies of arrays
*/

let originalArray = [1, 2, 3];
let copyArray = [...originalArray];
console.log(copyArray === originalArray); // false
