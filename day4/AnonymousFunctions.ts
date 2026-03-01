// Anonymous function
// Syntax: 
/* 
function(parameters) 
 { 
 // function body 
 }
 */
// // A function without a name is called an anonymous function.
// Anonymous functions are often used as arguments to other functions, or as immediately invoked function expressions (IIFEs).

let msg = function(): string 
{
    return "Hello, World!";
};
console.log(msg()); // Output: Hello, World!
 
// Example of an anonymous function with parameters and return type
let addNum = function(a: number, b: number): number {
    return a + b;
}
console.log(addNum(5, 3)); // Output: 8