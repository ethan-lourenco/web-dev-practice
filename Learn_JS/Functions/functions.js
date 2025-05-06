// May 2nd 2025

/* Functions
   - reusable pieces of code that perform a specific task or 
     calculate a value
*/

function greet1() {
  console.log("Hello, Jessica!");
}

greet1(); // Hello, Jessica!

/* Parameters
   - these act as placeholders for the values that will be passed to 
     the function when it is called
*/

/* Arguments
   - these actual values passed to the function when it is called
*/

// Guest is default parameter value
function greet2(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet2(); // Hello, Guest!
greet2("Ethan"); // Hello, Ethan!

// Function default return value is undefined

// Anonymous Function

const sum = function (num1, num2) {
  return num1 + num2;
};

console.log(sum(3, 4)); // 7

// Arrow Functions

// For one parameter you can remove parenthesis
// For no parameters use only parenthesis
// If function is one line it can be written using arrow function only
const greetings = (name) => {
  console.log(`Hello, ${name}`);
};

/* Scope
   - the visibility and accessibility of variables in different
     parts of your code
*/

/* Three Main Scope Types
   - Global: Outermost scope, variables can be accessed from anywhere
   - Local: Variables only accessible within a function
   - Block: Within curly braces
*/

/* Callback Function
   - function that is passed as an argument to another function and is
     executed after the main function has finished its execution
*/

const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number) => console.log(number * 2));

/* Higher Order Function
   - function that either takes one or more functions as arguments,
     returns a function, or both
*/

function operateOnArray(arr, operation) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(operation(arr[i]));
  }
  return result;
}

function double(x) {
  return x * 2;
}

let nums = [1, 2, 3, 4, 5];
let doubleNums = operateOnArray(nums, double);
console.log(doubleNums); // [ 2, 4, 6, 8, 10 ]

// Returning Functions
function multiplyBy(factor) {
  return function (number) {
    return number * factor;
  };
}

let triple = multiplyBy(3);
let quad = multiplyBy(4);

console.log(triple(5)); // 15
console.log(quad(5)); // 20

/* Map Method
   - method designed to create a new array by applying a given
     function to each element of the original array
*/

// Recall: const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);
console.log(numbers); // [1, 2, 3, 4, 5]
console.log(doubled); // [2, 4, 6, 8, 10]

// Filter Method
const numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbs = numbs.filter((num) => num % 2 === 0);
console.log(evenNumbs); // [2, 4, 6, 8, 10]

/* Reduce Method
   - allows you to process an array and condense it into a single
     value, this single value can be a number, string, object,
     or even another array
*/

// Recall: const numbers = [1, 2, 3, 4, 5];
const summation = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(summation); // 15

/* Method Chaining
   - allows you to call multiple methods on the same object in a
     single line of code
*/

const result = "  Hello, World!  "
  .trim()
  .toLocaleLowerCase()
  .replace("world", "JavaScript");

console.log(result);

/* every() Method
   - tests whether all elements in an array pass a test implemented
     by a provided function
*/

// Recall: const evenNumbs = [2, 4, 6, 8, 10]
const hasAllEvenNumbs = evenNumbs.every((num) => num % 2 === 0);
console.log(hasAllEvenNumbs); // true

/* sum() Method
   - checks if at least one element passes the test
*/

// Recall: const numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const hasSomeEvenNumbers = numbs.some((num) => num % 2 === 0);
console.log(hasSomeEvenNumbers); // true
