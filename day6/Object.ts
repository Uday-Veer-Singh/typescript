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
// using type aliases (TS)
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

// inline type object
let personWithInlineType: {
  name: string;
  age: number;
  city: string;
  summary: () => string;
} = {
  name: "Alice",
  age: 25,
  city: "Los Angeles",
  summary: function () {
    return `My name is ${this.name}, I am ${this.age} years old and I live in ${this.city}.`;
  },
};

personWithInlineType.summary(); // Output: My name is Alice, I am 25 years old and I live in Los Angeles.

// Using 'type' aliases
type PersonType = {
  name: string;
  age: number;
  city: string;
  summary: () => string;
};

let personWithTypeAlias: PersonType = {
  name: "Bob",
  age: 30,
  city: "Chicago",
  summary: function () {
    return `My name is ${this.name}, I am ${this.age} years old and I live in ${this.city}.`;
  },
};

let personWithTypeAlias2: PersonType = {
  name: "Charlie",
  age: 28,
  city: "San Francisco",
  summary: function () {
    return `My name is ${this.name}, I am ${this.age} years old and I live in ${this.city}.`;
  },
};

personWithTypeAlias.summary(); // Output: My name is Bob, I am 30 years old and I live in Chicago.
personWithTypeAlias2.summary(); // Output: My name is Charlie, I am 28 years old and I live in San Francisco.

// for in loop
for (let key in person) {
  console.log(key + ": " + person[key]);
}
// Output:
// name: John
// age: 31
// city: USA

// Object.keys() method
// The Object.keys() method returns an array of a given object's own enumerable property names.
console.log(Object.keys(person)); // Output: [ 'name', 'age', 'city' ]

// Intersecting types
// In TypeScript, you can create new types by intersecting existing types using the '&' operator. This allows you to combine multiple types into one.
type Name = {
  name: string;
};
type Age = {
  age: number;
};

type PersonWithIntersectingTypes = Name & Age;

let personWithIntersectingTypes: PersonWithIntersectingTypes = {
  name: "David",
  age: 35,
};

personWithIntersectingTypes; // Output: { name: 'David', age: 35 }

type personWithIntersectingTypes2 = Name &
  Age & {
    getDetails: () => string;
  };

let personWithIntersectingTypes2: personWithIntersectingTypes2 = {
  name: "Eve",
  age: 29,
  getDetails: function () {
    return `My name is ${this.name} and I am ${this.age} years old.`;
  },
};

personWithIntersectingTypes2.getDetails(); // Output: My name is Eve and I am 29 years old.

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

// In TypeScript, we can also define interfaces and classes to create more structured and type-safe objects.
// Interfaces allow us to define the shape of an object, while classes provide a blueprint for creating objects with specific properties and methods.

// Class
class Animal1 {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  speak() {
    console.log(this.name + " makes a noise.");
  }
}

let animal = new Animal1("Dog");
animal.speak(); // Output: Dog makes a noise.

class contactDetails {
  email: string;
  phone: string;
  constructor(email: string, phone: string) {
    this.email = email;
    this.phone = phone;
  }

  getContactDetails(): string {
    return `Email: ${this.email}, Phone: ${this.phone}`;
  }
}

let empContactDetails = new contactDetails("sihxiou", "xygix");
console.log(empContactDetails.getContactDetails()); // Output: Email: sihxiou, Phone: xygix
empContactDetails.getContactDetails(); // Output: Email: sihxiou, Phone: xygix

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
