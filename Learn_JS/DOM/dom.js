// May 6th 2025

/* API (Application Programming Interface)
   - APIs establish a set of rules and protocols that allow software
     applications to communicate with each other and exchange data
     efficiently
*/

/* DOM 
   - Document Object Model, It's a programming interface that lets
     us interact with HTML documents
*/

/* getElementById() Method
   - get an object that represents the HTML element with the 
     specified id
*/

/* querySelector() Method
   - get the first element in the HTML document that matches the 
     CSS selector passed as an argument
*/

/* querySelectorAll() Method
   - get a list of all the DOM elements that match a specific
     CSS selector
*/

/* Navigator Interface
   - provides information about the browser environment, such as
     the user agent string, the platform, and the version of the browser
*/

console.log(navigator.userAgent);
console.log(navigator.language);

/* Window Interface
   - represents the browser window that contains the DOM document
*/

console.log(window.innerWidth); // returns browser window width in px

/* Document Interface
   - represents the DOM document that is displayed in the browser window
*/

console.log(document.children);

// setAttribute Method
const para = document.getElementById("para");
para.setAttribute("class", "my-class");

/* Event Object
   - payload that triggers when a user interacts with your web page
     in some way
*/

/* Type Property
   - reveals the type of event that triggered the payload, such as
     keydown or click
*/

/* preventDefault() Method
   - prevents the default behavior of the event when called
*/

/* stopPropagation() Method
   - prevents the event from bubbling up or propagating to parent
     elements
*/

/* Event Listener
   element.addEventListener("click", () => {
   
   });
*/

// Examples

const btn = document.getElementById("btn");
btn.addEventListener("click", () => alert("You clicked the button"));

const input = document.getElementById("input");
input.addEventListener("input", () => {
  console.log(input.value);
});

/* Element.style Property
   - a read-only property that represents the inline style of an element, 
     you can use this property to get or set the style of an element
*/

const paraEl = document.getElementById("para");
paraEl.style.color = "red";

/* DOMContentLoaded Event
   - this event is fired when everything in the HTML document has been
     loaded and parsed
*/

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM is loaded.");
});

/* setTimeout()
   - delays an action for a specified time
*/

setTimeout(() => {
  console.log("This runs after 3 seconds");
}, 3000);

/* setInterval()
   - repeats an action for a set interval
*/

setInterval(() => {
  console.log("This runs every 2 seconds");
}, 2000);

// Stop Interval
const intervalID = setInterval(() => {
  console.log("This will stop after 5 seconds");
}, 1000);

clearTimeout(intervalID);

/* requestAnimationFrame()
   - allows you to schedule the next step of your animation before
     the next screen repaint, resulting in a fluid and visually 
     appealing experience
*/

function animate() {
  // Update animation
  update();
  // Request next frame
  requestAnimationFrame(animate);
}

function update() {
  element.style.transform = `translateX(${position}px)`;
  position += 2;
}

requestAnimationFrame(animate);

/* Web Animations API (WAAPI)
   - allows you to create and control animations directly within JS
*/

/* Animation Constructor
   - provides several instance methods and properties that allow you 
     to dynamically animate elements
*/

// Animate Method Example
const square = document.querySelector("#square");
const animation = square.animate(
  [{ transform: "translateX(0px)" }, { transform: "translateX(100px)" }],
  {
    duration: 2000, // makes animation last 2 seconds
    direction: "alternate", // move back and forth
    easing: "ease-in-out", // smooth easing
  }
);

animation.onfinish = () => {
  console.log("Animation finished!");
};

playBtn.addEventListener("click", () => {
  animation.play();
  console.log("You start the animation");
});

pauseBtn.addEventListener("click", () => {
  animation.pause();
  console.log("You pause the application");
});

/* Dialogs
   - lets you display important information or actions to users
*/

/* Modal Dialogs
   - forces the user to interact with it before they can access 
     the rest of the application or webpage
*/

const dialog = document.getElementById("my-modal");
const openButton = document.getElementById("open-modal");
const closeButton = document.getElementById("close-modal");

openButton.addEventListener("click", () => {
  dialog.show();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});

// Example AI Code
let button = document.getElementById("add-button");

button.addEventListener("click", () => {
  let input = document.querySelector("#item-input");
  let inputValue = input.value;

  let newItem = document.createElement("li"); // Create <li>
  newItem.textContent = inputValue; // Set its text

  let list = document.getElementById("item-list");
  list.appendChild(newItem); // Add it to the <ul>

  input.value = ""; // Optional: clears the input after adding
});

/* The change Event
   - special event which is fired when the user modifies the 
     value of certain input elements
*/

/* Event Bubbling
   - A.K.A. propagation, refers to how an event "bubbles up" to
     parent objects when triggered
*/

/* Event Delegation
   - process of taking a captured event, and delegating it to 
     another element
*/

const p = document.querySelector("p");
p.addEventListener("click", (event) => {
  event.target.style.color = "red";
});
