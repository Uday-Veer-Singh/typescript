// Named function
// syntax
function functionName(): void {
    console.log("This is a named function with no parameters and no return type.");
}

// named function with no parameters and no return type
function greet(): void {
    console.log("Hello, World!");
}
greet(); // Output: Hello, World! // calling function

// named function with parameters and return type
function add(a: number, b: number): number {
    return a + b;
}
let sum = add(5, 3);
console.log(sum); // Output: 8
// both ways are correct to call the function
console.log(add(10, 20)); // Output: 30

// named function with parameters and no return type
function printMessage(message: string): void {
    console.log(message);
}
printMessage("This is a message."); // Output: This is a message.

// named function with no parameters and return type
function getCurrentDate(): Date {
    return new Date();
}
let currentDate = getCurrentDate();
console.log(currentDate); // Output: current date and time

// named function with optional parameters and return type
function multiply(a: number, b: number, c?: number): number {
    if (c !== undefined) {
        return a * b * c;
    }
    return a * b;
}
console.log(multiply(2, 3)); // Output: 6
console.log(multiply(2, 3, 4)); // Output: 24

// named function with default parameters and return type
function divide(a: number, b: number, c: number = 1): number {
    return (a / b) / c;
}
console.log(divide(10, 2)); // Output: 5
console.log(divide(10, 2, 2)); // Output: 2.5

// named function with rest parameters and return type
function sumAll(...numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
// both are correct logics
function addAll(...numbers: number[]): void {
  let i ;
  let sum = 0;
  for (i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);    
}
console.log(sumAll(1, 2, 3, 4)); // Output: 10
console.log(addAll(1, 2, 3, 4)); // Output: 10

// named functions with rest parameters (multiple types)
function countAll(...items: (number | string)[]): number {
    return items.length;
}
console.log(countAll(1, "hello", 3, "world")); // Output: 4

///////////////////////////////////////////////////////////////////////////////