// May 19th 2025

/* Asynchronous
   - tasks that run in the background, independently from the 
     main flow of the program
*/

/* Thread
   - a unit of execution within a process, It's like a separate 
     flow of control within the program
*/

/* Promise
   - an object that represents the eventual completion (or failure)
     of an asynchronous process and its value
*/

const aPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Operation successful!");
  }, 1000);
});

/* .then and .catch Methods
   - the .then() method is used in a Promise to specify what should 
     happen when the Promise is fulfilled, while .catch() is used to
     handle any errors that occur
*/

aPromise
  .then((result) => {
    console.log(result); // Outputs: "Operation successful!"
  })
  .catch((error) => {
    console.log(error);
  });

/* The fetch API
   - allows web apps to make network requests, typically to retrieve
     or send data to the server, this API provides a fetch() method
     that you can use to make these requests
*/

// Promise Chaining
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    return fetch("https://api.example.com/data2");
  })
  .then((response) => response.json())
  .then((data2) => console.log(data2))
  .catch((error) => console.log("Error:", error));

/* POST Method
   - used to send data to a server to create a resource
*/

fetch("https://api.example.com/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "John Doe",
    email: "john@example.com",
  }),
});

/* PUT Method
   - used to update existing resources on the server
*/

fetch("https://api.example.com/users/45", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "John Smith",
    email: "john@example.com",
  }),
});

/* DELETE Method
   - used to delete a resource from the server
*/

fetch("https://api.example.com/users/45", {
  method: "DELETE",
});

/* async/await
   - built on top of Promises, makes writing and reading 
     asynchronous code easier
*/

async function delayedGreeting(name) {
  console.log("A Messenger entered the chat...");
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log(`Hello, ${name}!`);
}

delayedGreeting("Alice");
console.log("First Printed Message!");

/* The Geolocation API
   - provides a way for websites to request the user's location,
     It's important to note that for privacy reasons, the user has
     to give permission before their location can be accessed via
     the website
*/

navigator.geolocation.getCurrentPosition(
  (position) => {
    console.log("Latitude " + position.coords.latitude);
    console.log("Longitude: " + position.coords.longitude);
  },
  (error) => {
    console.log("Error: " + error.message);
  }
);
