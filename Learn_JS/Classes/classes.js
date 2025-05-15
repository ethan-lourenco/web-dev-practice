// May 13th 2025

/* Classes
   - used for creating multiple objects of the same kind
*/

/* Syntax for Class Declaration

   class MyClassName {
      // Class Methods
      constructor() { ... }
      method1()  { ... }
      method2()  { ... }
      ...
   }   

*/

class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    console.log(`${this.name} says woof!`);
  }
}

const dog = new Dog("Gino");
dog.bark();

/* The this Keyword
   - refers to the context where the code is supposed 
     to run
*/

/* Parent Class
   - class that acts like a blueprint for other classes,
     it defines properties and methods that are inherited
     by other classes 
*/

/* Child Class
   - class that inherits the properties and methods of
     another class 
*/

class Vehicle {
  constructor(brand, year) {
    this.brand = brand;
    this.year = year;
  }
}

class Car extends Vehicle {
  honk() {
    console.log("Honk! Honk!");
  }
}

let myCar = new Car("Honda Civic", 2021);
console.log(myCar.brand);
console.log(myCar.year);
myCar.honk();

// Additional Example

class BetterCar extends Vehicle {
  constructor(brand, year, numDoors) {
    super(brand, year);
    this.numDoors = numDoors;
  }
}

/* Factory Method
   - method defined in addition to the constructor to
     create objects based on specific criteria
*/

class Pizza {
  static numberOfPizzasSold = 0;

  constructor(type, price) {
    this.type = type;
    this.price = price;
    Pizza.numberOfPizzasSold++;
  }

  static createMargherita() {
    // "this" refers to the class as the static method belongs to the class
    return new this("Margherita", 6.99);
  }
}

let myPizza = Pizza.createMargherita();
console.log(myPizza);
console.log(Pizza.numberOfPizzasSold);
