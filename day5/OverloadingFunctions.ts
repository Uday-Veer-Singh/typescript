// step1: write signatures of functions

// atep2: implement the function

// step3: callinf the function

// what is fucntion overloading? 
// Function overloading is a feature in TypeScript that allows you to define multiple function signatures for a single function implementation. This means you can have different ways to call the same function, and TypeScript will determine which implementation to execute based on the arguments provided.

// what is fucntion signature?
// A function signature is the part of a function declaration that specifies the function's name, parameters, and return type. It defines how the function can be called and what types of arguments it accepts. In TypeScript, you can have multiple function signatures for a single function implementation, which is known as function overloading. Each signature describes a different way to call the function, allowing for more flexible and versatile code.

// what is signature of a fucntion?
// A fucntion without having the implementation or without having the body of the function is called signature of a function. It is also called as declaration of a function. It is used to define the structure of a function and to specify the types of parameters and return type of the function. It is used to provide type information to the compiler and to enable type checking at compile time.

// Function signatures
// Different parameter types (data types) and same return types
function display(value: string): void; // function signature 1
function display(value: number): void; // function signature 2

// Function implementation
function display(value: any): void { // function implementation
  if (typeof value === 'string') {
    console.log('String value: ' + value);
  } else if (typeof value === 'number') {
    console.log('Number value: ' + value);
  } else {  
    console.log('Unsupported type');
  }
}
console.log(display('Hello')); // Output: String value: Hello 
console.log(display(42)); // Output: Number value: 42
console.log(display(true)); // Output: Unsupported type

// Different numbers of parameteres and same return types
function addSum(a: number, b: number): number; // function signature 1
function addSum(a: number, b: number, c: number): number; // function signature 2

// Function implementation
function addSum(a: number, b: number, c?: number): number { // function implementation
  if (c === undefined) {
    return a + b;
  } else {
    return a + b + c;
  }
}

console.log(addSum(5, 10)); // Output: 15
console.log(addSum(5, 10, 15)); // Output: 30
console.log(addSum(6)); // Output: NaN (since the second parameter is missing and treated as undefined)

// Different parameter types (data types) and different return types
function processValue(value: string): string; // function signature 1
function processValue(value: number): number; // function signature 2

// Function implementation
function processValue(value: any): any { // function implementation
  if (typeof value === 'string') {
    return value.toUpperCase(); // Example of processing a string
  } else if (typeof value === 'number') {
    return value * 2; // Example of processing a number
  } else {
    return 'Unsupported type';
  }
}

console.log(processValue('Hello')); // Output: HELLO
console.log(processValue(42)); // Output: 84
console.log(processValue(true)); // Output: Unsupported type

// funion overloading with optional parameters
function greet(name: string): string; // function signature 1
function greet(name: string, age: number): string; // function signature 2
function greet(name: string, age: number, inJob: boolean): string; // function signature 3

// Function implementation
function greet(value: string | number | boolean): string {
  if (typeof value === 'string') {
    return `Hello, ${value}!`;
  } else if (typeof value === 'number') {
    return `You are ${value} years old.`;
  } else if (typeof value === 'boolean') {
    return value ? 'You are in a job.' : 'You are not in a job.';
  } else {
    return 'Unsupported type';
  }
}

console.log(greet('Alice')); // Output: Hello, Alice!
console.log(greet(30)); // Output: You are 30 years old.
console.log(greet(true)); // Output: You are in a job.
console.log(greet(false)); // Output: You are not in a job.
console.log(greet(9.002)); // Output: Unsupported type