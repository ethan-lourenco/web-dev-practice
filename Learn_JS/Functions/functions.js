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
const greetings = name => {
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