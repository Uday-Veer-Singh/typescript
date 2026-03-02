// Callback functions are functions that are passed as arguments to other functions and are executed after some operation has been completed. They are commonly used in asynchronous programming to handle events or perform actions after a certain task is finished.
// Example of a callback function in TypeScript:

// Function that takes callback function as a parameter
function greet(name: string, callback: (message: string) => void) {
  console.log(name);
  callback('hello'); // executing the callback function
}

// Callback function
function fetchData(message: string)
{
  console.log(message);
}

// Calling the function by passing the callback function as an argument
greet ('name', fetchData); // Output: name // Output: hello // In this example, the `greet` function takes a name and a callback function as parameters. It logs the name and then executes the callback function, passing a message to it. The `fetchData` function is defined as a callback that logs the message it receives. When we call `greet`, we pass `fetchData` as the callback, which results in both the name and the message being logged to the console. 

function sum(a: number, b: number, CallDIsplayResult: (result: number) => void) {
  let result = a + b;
  CallDIsplayResult(result); // executing the callback function
}
// Callback function 
function Displayresult(result: number)
{
  console.log(result);
}

sum (5, 5, Displayresult); // Output: 10 // In this example, the `sum` function takes two numbers and a callback function as parameters. It calculates the sum of the two numbers and then executes the callback function, passing the result to it. The `Displayresult` function is defined as a callback that logs the result it receives. When we call `sum`, we pass `Displayresult` as the callback, which results in the sum being logged to the console.