// April 30th 2025

/* Bracket Notation
   - allows you to retrieve a specific character from a
     string based on its position/index
*/

let greeting = "hello";
console.log(greeting[1]);
// Output: "e"

console.log(greeting[greeting.length - 1]);
// Output: "o"

let firstTwo = greeting[0] + greeting[1];
console.log(firstTwo);
// Output: "he"

/* Substring
   - a sequence of characters that appears within a larger string
*/

let sentence = "JavaScript is awesome!";
let position = sentence.indexOf("awesome");
console.log(position);
// Output: 14

let phrase = "JavaScript is awesome!";
let result = phrase.includes("awesome");
console.log(result); // Output: true

/* slice() method
   - allows you to extract a portion of a string and returns a new
     string, without modifying the original string
*/

let message = "Hello, world!";
let greet = message.slice(0, 5);
console.log(greet) // Output: Hello

// Prompt

let userName = prompt("What is your name?", "Guest"); // "Guest" is the placeholder

/* ASCII 
   - a character encoding standard used in computers to represent text
*/

let letter = "A";
console.log(letter.charCodeAt(0));
// Output: 65

let char = String.fromCharCode(65);
console.log(char); // Output: A




