/** @format */

// Arrays
// Arrays are a collection of values of the same type. They are used to store
// multiple values in a single variable. In TypeScript, you can define arrays
// using two different syntaxes: the array literal syntax and the generic array
// type syntax.
// Array literal syntax
let numbers: number[] = [1, 2, 3, 4, 5]; // Array of numbers
let names: string[] = ["Alice", "Bob", "Charlie"]; // Array of strings
let mixed: (number | string)[] = [1, "Alice", 2, "Bob"]; // Array of numbers
// and strings (union type)
let booleanArray: boolean[] = [true, false, true]; // Array of booleans
let anyArray: any[] = [1, "Alice", true, { name: "Bob" }]; // Array of any
// type (not recommended for type safety)

// Generic array type syntax
let numbers2: Array<number> = [1, 2, 3, 4, 5]; // Array of numbers
let names2: Array<string> = ["Alice", "Bob", "Charlie"]; // Array of strings

// Accessing array elements
console.log(numbers[0]); // Output: 1
console.log(names[1]); // Output: Bob

// Modifying array elements
numbers[2] = 10; // Modifying the third element of the numbers array
console.log(numbers); // Output: [1, 2, 10, 4, 5]
names[0] = "Eve"; // Modifying the first element of the names array
console.log(names); // Output: ['Eve', 'Bob', 'Charlie']

// Array methods
numbers.push(6); // Adding an element to the end of the numbers array
console.log(numbers); // Output: [1, 2, 10, 4, 5, 6]
names.pop(); // Removing the last element from the names array
console.log(names); // Output: ['Eve', 'Bob']

// Iterating over arrays
// Using for loop to iterate over arrays
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]); // Output: 1, 2, 10, 4, 5, 6
}

// Using for...in loop to iterate over arrays
// (not recommended for arrays, better for objects)
for (let index in names) {
  console.log(names[index]); // Output: Eve, Bob
}

// Using for...of loop to iterate over arrays
for (let name of names) {
  console.log(name); // Output: Eve, Bob
}

// Using forEach method to iterate over arrays
names.forEach((name) => console.log(name)); // Output: Eve, Bob

// Array of objects
interface Person {
  name: string;
  age: number;
} // Defining an interface for a person object

let people: Person[] = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
]; // Array of person objects

console.log(people[0].name); // Output: Alice
console.log(people[1].age); // Output: 25

// Multidimensional arrays
let matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]; // A 2D array (matrix) of numbers

console.log(matrix[0][1]); // Output: 2
console.log(matrix[2][0]); // Output: 7

// In this example, we have defined arrays of numbers and strings using both
// the array literal syntax and the generic array type syntax. We have also
// demonstrated how to access and modify array elements, use array methods,
// iterate over arrays, and create arrays of objects and multidimensional
// arrays.

// Note: TypeScript provides type safety for arrays, ensuring that you can only
// store values of the specified type in the array. This helps prevent errors
// and improves code readability.

// In addition to the basic array operations, TypeScript also provides various
// built-in methods for arrays, such as `map`, `filter`, `reduce`, and more,
// which allow you to perform complex operations on arrays in a functional
// programming style.

// For example, you can use the `map` method to create a new array by applying
// a function to each element of an existing array:
let squaredNumbers = numbers.map((num) => num * num);
console.log(squaredNumbers); // Output: [1, 4, 100, 16, 25, 36]

// You can also use the `filter` method to create a new array that contains
// only the elements that satisfy a certain condition:
let evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6]

// The `reduce` method can be used to accumulate values from an array into a
// single result:
let sumOfNumbers = numbers.reduce((acc, num) => acc + num, 0);
console.log(sumOfNumbers); // Output: 28

// These methods provide powerful ways to manipulate and transform arrays in
// TypeScript, making it easier to work with collections of data.

// In summary, arrays in TypeScript are a fundamental data structure that
// allows you to store and manipulate collections of values. They provide type
// safety and a wide range of methods for working with data, making them an
// essential part of any TypeScript developer's toolkit.

// It's important to note that TypeScript also supports tuples, which are a
// special type of array that can contain elements of different types. Tuples
// are defined using the syntax `[type1, type2, ...]` and can be useful for
// representing fixed-size collections of related values. For example:
