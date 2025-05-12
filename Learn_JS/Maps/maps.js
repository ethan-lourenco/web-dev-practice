// May 12th 2025

/* Set
   - built-in object for managing data collections
*/

/* WeakSet
   - special Set that allows you to only store weakly 
     held object references and symbols
*/

const treeSet = new Set();
// Add items
treeSet.add("Mopane Tree");
treeSet.add("Breadfruit");

// Other methods
treeSet.delete("Mopane Tree");
console.log(treeSet.has("Breadfruit")); // true
console.log(treeSet.entries()); // SetIterator

// Returns number of items
console.log(treeSet.size); // 3

// Show values of the Set
treeSet.keys();
treeSet.values();

// Iterate through Set
treeSet.forEach();

// Removes all items
treeSet.clear();

// WeakSet
const treeWeakSet = new WeakSet();

treeWeakSet.add({ name: "Baobab" });
treeWeakSet.add({ name: "Jackalberry" });

/* Map
   - object that stores key-value pairs, similar to an object
*/

/* Map
   - collection of key-value pairs, similar to a Map, but uses
     weak references for its keys
*/

const myTreesMap = new Map([
  [{ type: "deciduous" }, "Maple tree"],
  [["forest", "grove"], "Pine tree"],
  [42, "Oak tree"],
  [true, "Birch tree"],
  [
    function () {
      return "I am a function key";
    },
    "Willow tree",
  ],
]);

console.log(myTreesMap);

// Other Methods
myTreesMap.get(key);
myTreesMap.has(key);
myTreesMap.delete(key);
myTreesMap.clear();
myTreesMap.entries();
myTreesMap.forEach();
myTreesMap.size;

// WeakMap
const myTreeWeakMap = new WeakMap();
myTreeWeakMap.set({ id: 1 }, "Maple tree");
myTreeWeakMap.set({ id: 2 }, "Pine tree");

console.log(myTreeWeakMap);
