// Arrow functions
// Syntax:  
/*
let variableName = (parameters) => {
    // function body
} 
  variableName();
*/
// Arrow functions are a more concise syntax for writing functions in TypeScript. They are often used for anonymous functions, but can also be used for named functions.
// Arrow functions use the "=>" syntax and can have implicit return values if the function body is a single expression.
// Arrow functions also capture the "this" context of the surrounding code, which can be useful in certain situations.

// Example of an arrow function with no parameters and no return type
let gret = ():void =>
{
  console.log('hey, ink');
}
gret(); // Output: hey, ink

// Example of an arrow function with parameters and return type
let addDig = (a: number, b: number): number => {
    return a + b;
}
console.log(addDig(5, 3)); // Output: 8

// Example of an arrow function with implicit return value
// When the function body is a single expression, you can omit the curly braces and the "return" keyword. The value of the expression will be returned automatically.
let multiplyDig = (a: number, b: number): number => a * b;
console.log(multiplyDig(2, 3)); // Output: 6

// Arrow function with optional parameters and return type
let divideDig = (a: number, b: number, c?: number): number => {
    if (c !== undefined) {
        return (a / b) / c;
    }
    return a / b;
}
console.log(divideDig(10, 2)); // Output: 5
console.log(divideDig(10, 2, 2)); // Output: 2.5

let displayDetails = (name?: string, age?: number, city?: string): void => {
    console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
}
displayDetails("Alice", 30); // Output: Name: Alice, Age: 30
displayDetails("Bob", 25, "New York"); // Output: Name: Bob, Age: 25, City: New York  
displayDetails(); // Output: Name: undefined, Age: undefined, City: undefined

// Arrow functions with the default parameters and return type
let greetYou = (name: string, postFix: string = "Sir"): string => {
    return `Hello, ${name} ${postFix}!`;
}
console.log(greetYou('Sam')); // Output: Hello, Sam Sir!
console.log(greetYou('Sam', 'Maam')); // Output: Hello, Sam Maam!

// Arrow function with rest parameters and return type
let sumAllDig = (...numbers: number[]): number => {
  let i;  
  let sum = 0;
  for (i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
console.log(sumAllDig(1, 2, 3, 4)); // Output: 10
console.log(sumAllDig(1,1,11,1,1,1,1,1,1,1,1,1,1,1)); // Output: 22