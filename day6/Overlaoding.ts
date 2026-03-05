/** @format */

// Method Overloading and constructor overlaoding

class Calculator1 {
  // Constructor Overloading
  constructor(); // default constructor

  constructor(a: number, b: number);
  //parameterized constructor

  constructor(a?: number, b?: number) {
    if (a !== undefined && b !== undefined) {
      console.log("Sum", a + b);
    } else {
      console.log("default constructor called.");
    }
  }

  // Method Overloading
  add(a: number, b: number): number;
  add(a: number, b: number, c: number): number;

  add(a: number, b: number, c?: number): number {
    if (c !== undefined) {
      return a + b + c;
    }
    return a + b;
  }
}

// Example for constructor overloading
let calc1 = new Calculator1();
let calc2 = new Calculator1(2, 5);

// Example for method overloading
console.log("Adding 2 number: ", calc1.add(3, 3));
console.log("Adding 3 number: ", calc1.add(3, 3, 3));

console.log("Adding 2 number: ", calc2.add(3, 3));
console.log("Adding 3 number: ", calc2.add(3, 3, 3));
