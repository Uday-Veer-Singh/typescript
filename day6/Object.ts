/** @format */

// Object is a collection of properties, and a property is an association between a name (or key) and a value.
// Object is a data type that allows us to store collections of data and more complex entities.
// syntax for creating an object in JavaScript and TypeScript is as follows:
/*
let myObject = {
    property1: value1,
    property2: value2,
    // ...
};
*/

// Diffferent Ways to Create Objects in JavaScript and TypeScript:
// using  'object' type - directly define the values for variables (JS/TS)
// Inline Type Object - we also define the dataype of the keys and values (TS specific)
// using type aliases (JS/TS)
// using the classes (JS/TS)

//OR

// 1. Object Literal
// 2. Object Constructor
// 3. Object Prototypes
// 4. Classes and Interfaces (TypeScript specific)

// Object Literal
// An object literal is a comma-separated list of name-value pairs wrapped in curly braces.

// Example of an object literal
let person = {
  name: "John",
  age: 30,
  city: "New York",
};

let personWithMethods = {
  name: "John",
  age: 30,
  city: "New York",
  greet: function () {
    console.log(
      "Hello, my name is " +
        this.name +
        ",Age " +
        this.age +
        "and I live in " +
        this.city
    ); // 'this' refers to the current object
    // Output : Hello, my name is John, Age 30 and I live in New York
  },
};

// Accessing Object Properties
// You can access the properties of an object using dot notation or bracket notation.

// Using dot notation
console.log(person.name); // Output: John

// Using bracket notation
console.log(person["age"]); // Output: 30

// Adding and Modifying Object Properties
// You can add new properties to an object or modify existing properties.
// Adding a new property
person.city = "USA";
console.log(person); // Output: { name: 'John', age: 30, city: 'USA' }

// Modifying an existing property
person.age = 31;
console.log(person); // Output: { name: 'John', age: 31, city: 'USA' }

// Object Methods
// An object can also have methods, which are functions that are properties of the object.
let personWithMethod = {
  name: "Alice",
  greet: function () {
    console.log("Hello, my name is " + this.name);
  },
};
personWithMethod.greet(); // Output: Hello, my name is Alice
// Object Constructor

console.log(personWithMethod.greet()); // Output: Hello, my name is Alice
console.log(personWithMethods.greet()); // Output: Hello, my name is John, Age 30 and I live in New York

// You can also create objects using a constructor function.
function Person(name, age) {
  this.name = name;
  this.age = age;
}
let person1 = new Person("Bob", 25);
console.log(person1); // Output: Person { name: 'Bob', age: 25 }
// Object Prototypes
// In TypeScript, you can use prototypes to add properties and methods to objects.
Person.prototype.greet = function () {
  console.log("Hello, my name is " + this.name);
};
person1.greet(); // Output: Hello, my name is Bob

// Object is a fundamental data type in JavaScript and TypeScript that allows us to store and manipulate complex data structures. It provides a way to group related data and functions together, making it easier to manage and organize our code.
// In TypeScript, we can also define interfaces and classes to create more structured and type-safe objects.
// Interfaces allow us to define the shape of an object, while classes provide a blueprint for creating objects with specific properties and methods.
// Overall, objects are a powerful and essential part of JavaScript and TypeScript programming, enabling us to create complex data structures and implement object-oriented programming concepts.
// interface and classes
interface PersonInterface {
  name: string;
  age: number;
  greet(): void;
}
class PersonClass implements PersonInterface {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Hello, my name is " + this.name);
  }
}
let person2 = new PersonClass("Charlie", 28);
person2.greet(); // Output: Hello, my name is Charlie
