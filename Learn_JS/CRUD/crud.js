// May 12th 2025

/* CRUD
   - Create, Read, Update, Delete, these are the four
     operations of persistent storage
*/

/* RESTful APIs
   - a set of conventions for building web services that
     allow the client to interact with a database or backend
     system by performing CRUD operations through standard
     HTTP methods
*/

/* Web Storage API
   - provides a mechanism for browsers to store key-value pairs
     right within the browser, allowing developers to stor information
     that can be used across different page reloads and sessions
*/

/* localStorage
   - the part of the Web Storage API that allows data to persist even
     after the browser window is closed or the page is refreshed
*/

/* sessionStorage
   - another part of the Web Storage API that stores data for the duration
     of the page session, meaning the data is available as long as the
     browser tab or window is open
*/

/* Caching
   - refers to storing frequently accessed data in a temporary storage
     location, known as a cache, so that subsequent requests for that data
     can be served more quickly without having to recompute or fetch it from
     a slower data source, such as a database or external server
*/

// Store user's theme preference
localStorage.setItem("theme", "dark");

// Retrieve the stored theme preference
const userTheme = localStorage.getItem("theme");
console.log(userTheme); // "dark"

// Remove the theme preference
localStorage.removeItem("theme");

// Clear all localStorage data
localStorage.clear();

/* Cookies
   - small pieces of data that a server sends to a user's web browser
*/

/* Header
   - a key-value pair that provides additional information about the HTTP
     request or response
*/

/* A Network Request
   - a request made by a web browser or application to a server to retrieve
     data or resources over the internet
*/

/* A Service Worker
   - a special type of JS file that runs in the background of a web application
     separate from the main browser thread, it acts as a middleman between the web 
     page and the network, allowing developers to intercept network requests, cache
     resources, and handle things like push notifications or background sync
*/

/* PWA
   - Progressive Web App, a type of web app that uses modern web technologies to
     provide native app-like experience on the web, they are designed to work reliably
     on any device, regardless of network conditions, and can be accessed through a 
     browser or installed on a user's device like a traditional app
*/

/* The Cache API
   - a storage mechanism that stores Request and Response objects, when a request is
     made to a server, the application can store the response and later retrieve it
     from the cache instead of making a new network request, this reduces load times,
     saves bandwidth, and improves the overall user experience
*/

/* Browser Fingerprinting
   - this technique uses client-side information to create a unique "fingerprint"
     of a user's browser
*/

/* IndexedDB
   - a tool for storing structured data in the browser, this is built into modern
     web browsers, allowing web apps to store and fetch JS objects efficiently
*/

/* Object Store
   - objects stores in IndexedDB are similar to tables in traditional databases,
     they hold the actual data you want to store
*/

let request1 = indexedDB.open("Sample DB", 1);

request1.onerror = function (event) {
  console.log("Error opening database");
};

request1.onsuccess = function (event) {
  let db = event.target.result;
  console.log("Database opened successfully");
};

/* Key Path
   - like a primary key in a traditional database, it's used to uniquely
     identify each record
*/

let transaction = db.transaction(["customers"], "readwrite");
let objectStore = transaction.objectStore("customers");
let request2 = objectStore.add({
  id: 1,
  name: "John Doe",
  email: "john@example.com",
});

request2.onerror = function (event) {
  console.log("Error opening database");
};

request2.onsuccess = function (event) {
  console.log("Database opened successfully");
};
