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
greet ('name', fetchData);