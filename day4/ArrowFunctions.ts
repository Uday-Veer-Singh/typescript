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