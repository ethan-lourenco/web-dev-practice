// May 3rd 2025

/*  Object Syntax

    const exampleObject = {
        propertyName: value,
    };

*/

// Example
const person = {
  name: "Alice",
  age: 30,
  city: "New York",
};

// Accessing Object Properties

// Dot Notation
console.log(person.name); // Alice
console.log(person.age); // 30

// Bracket Notation
console.log(person["name"]); // Alice
console.log(person["city"]); // New York

/* Object Destructuring 
   - allows you to extract values from objects and assign them
     to variables in a more concise and readable way
*/

const { name: personName, age: personAge, country = "Unknown" } = person;
console.log(personName); // Alice
console.log(personAge); // 30
console.log(country); // Unknown

// Remove Properties
delete person.city;

/* hasOwnProperty() Method
   - returns a boolean indicating whether the object has the
     specified property
*/

console.log(person.hasOwnProperty("name")); // true

// In Operator
console.log("age" in person); // true

/* Constructor
   - a special type of function used to create and initialize
     objects, it is invoked with the new keyword and can 
     initialize properties and methods on the newly created object
*/

const num = 42;
const numObj = Object(num);
console.log(numObj); // [Number: 42]
console.log(typeof numObj); // object

/* Optional Chaining Operator (?.)
   - used to safely access object properties or call methods without
     worrying if they exist or not
*/

const user = {
  name: "John",
  profile: {
    email: "john@example.com",
    address: {
      street: "123 Main St",
      city: "Somewhere",
    },
  },
};

console.log(user.profile?.address?.street); // 123 Main St
console.log(user.profile?.phone?.number); // undefined

/* JSON
   - JavaScript Object Notation, a lightweight, text-based
     data format commonly used to exchange data between
     a server and web app
*/

/* JSON.stringify()
   - used to convert a JS object in a JSON string, useful for 
     storing or transmitting data in a format that's easy to 
     share or transfer between systems
*/

const jsonString = JSON.stringify(user, null, 2);
console.log(jsonString);

/* JSON.parse()
   - converts a JSON string into a JS object, useful when you 
     need to manipulate JSON data in your application
*/
