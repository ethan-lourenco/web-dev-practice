// May 5th 2025

/* Counter Variable
   - variable used to keep track of how many times the 
     loop has run
*/

// For Loop Example
for (let i = 2; i <= 6; i += 2) {
  console.log(i);
}

// For of Loop (Good for arrays/strings)
const numbers = [1, 2, 3, 4, 5];
for (const num of numbers) {
  console.log(num);
}

/* Inherited Property
   - property that is inherited from the object's
     prototype chain
*/

// For in Loop (Use for Objects)
const fruit = {
  name: "apple",
  color: "red",
  price: 0.99,
};

for (const prop in fruit) {
  console.log(fruit[prop]);
}

/* While Loop
   - runs a block of code as long as the condition
     is true 
*/

// Example
let userInput = prompt("Please enter a number between 1 and 10.");

while (isNaN(userInput) || Number(userInput) < 1 || Number(userInput) > 10) {
  userInput = prompt("Invalid input. Please enter a number between 1 and 10.");
}

alert("You entered a valid number!");

// Do While Loop
let userIn;

do {
  userIn = prompt("Please enter a number between 1 and 10.");
} while (Number(userIn) < 1 || Number(userIn) > 10);

alert("You entered a valid number!");
