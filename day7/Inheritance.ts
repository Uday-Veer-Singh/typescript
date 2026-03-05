/** @format */

// Inheritance
// A class can reuse the properties and methods of another class.
// Inheritance is a mechanism where one class (child) can inherit the properies
// and methods of another class (parent).
// Inheritance allows you to reuse the functionality of an existing class without rewriting it.

// A - properties + methods (Parent/ Base/ Super class)
// B extends A - properties + methods (Child/ Dreived/ Sub class)

// Parent class
class wheel4 {
  name: string;
  color: string;
  model: string;

  // Constructor
  constructor(name: string, color: string, model: string) {
    this.name = name;
    this.color = color;
    this.model = model;
  }

  // Methods
  start() {
    console.log("Car Started");
  }

  stop() {
    console.log("Car Stopped");
  }

  displayCarDetails() {
    console.log(
      `Name: ${this.name}, Color: ${this.color}, Model: ${this.model}`
    );
  }
}

class Honda extends wheel4 {
  year: number;

  // Constuctor
  constructor(name: string, color: string, model: string, year: number) {
    super(name, color, model);
    this.year = year;
  }

  // Method Overriding
  // Methods
  start() {
    console.log("Honda is active");
  }

  stop() {
    console.log("Honda is inactive");
  }

  yom() {
    console.log(
      `Name: ${this.name}, Color: ${this.color}, Model: ${this.model}, Year of make: ${this.year}`
    );
  }
}

class Toyota extends wheel4 {
  year: number;

  constructor(name: string, color: string, model: string, year: number) {
    super(name, color, model);
    {
      this.year = year;
    }
  }

  start() {
    console.log("Toyota starts");
  }

  stop() {
    console.log("Toyota is inactive");
  }

  yom() {
    console.log(
      `Name: ${this.name}, Color: ${this.color}, Model: ${this.model}, Year of make: ${this.year}`
    );
  }
}

// Create Objects

// Honda objects
let honda = new Honda("Honda", "blue", "civic", 2007);

console.log(honda.name, honda.color, honda.model, honda.year);

honda.start(); // Honda is active // called this child class method (override)

honda.displayCarDetails();
// Name: Honda, Color: blue, Model: civic // Parent class

honda.stop(); // Honda is inactive // Parent class

honda.yom();
// Name: Honda, Color: blue, Model: civic, Year of make: 2007 // Child class

// Toyota Objects
let toyota = new Toyota("Toyota", "blue", "lexus", 2026);

console.log(toyota.name, toyota.color, toyota.model, toyota.year);

toyota.start(); // Toyota starts

toyota.displayCarDetails(); // Name: Toyota, Color: blue, Model: lexus

toyota.stop(); // Toyota is inactive

toyota.yom(); //Name: Toyota, Color: blue, Model: lexus, Year of make: 2026

// Parent class variable is holding child class object
let wheeler: wheel4 = new Honda("RAM", "Black", "4*4", 2026);

wheeler.displayCarDetails();
// Name: RAM, Color: Black, Model: 4*4 // Parent class

wheeler.start(); // Honda is active // Child class

// wheeler.yom(); // Not accesible as yom() is defined in child class not in parent class
