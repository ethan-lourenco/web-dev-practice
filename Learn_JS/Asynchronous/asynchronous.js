
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
