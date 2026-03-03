/** @format */

// Arrays
// Arrays are a collection of values of the same type. They are used to store
// multiple values in a single variable. In TypeScript, you can define arrays
// using two different syntaxes: the array literal syntax and the generic array
// type syntax.
// Array literal syntax
let numbersArr: number[] = [1, 2, 3, 4, 5]; // Array of numbersArr
let names: string[] = ["Alice", "Bob", "Charlie"]; // Array of strings
let mixed: (number | string)[] = [1, "Alice", 2, "Bob"]; // Array of numbersArr
// and strings (union type)
let booleanArray: boolean[] = [true, false, true]; // Array of booleans
let anyArray: any[] = [1, "Alice", true, { name: "Bob" }]; // Array of any
// type (not recommended for type safety)

// Generic array type syntax
let numbersArr2: Array<number> = [1, 2, 3, 4, 5]; // Array of numbersArr
let names2: Array<string> = ["Alice", "Bob", "Charlie"]; // Array of strings

// Accessing array elements
console.log(numbersArr[0]); // Output: 1
console.log(names[1]); // Output: Bob

// Modifying array elements
numbersArr[2] = 10; // Modifying the third element of the numbersArr array
console.log(numbersArr); // Output: [1, 2, 10, 4, 5]
names[0] = "Eve"; // Modifying the first element of the names array
console.log(names); // Output: ['Eve', 'Bob', 'Charlie']

// Array methods
numbersArr.push(6); // Adding an element to the end of the numbersArr array
console.log(numbersArr); // Output: [1, 2, 10, 4, 5, 6]

names.pop(); // Removing the last element from the names array
console.log(names); // Output: ['Eve', 'Bob']

numbersArr.shift(); // Removing the first element from the numbersArr array
console.log(numbersArr); // Output: [2, 10, 4, 5, 6]

numbersArr.unshift(1); // Adding an element to the beginning of the numbersArr array
console.log(numbersArr); // Output: [1, 2, 10, 4, 5, 6]

let combinedArray = numbersArr.concat([7, 8, 9], [1]); // Concatenating another array to the numbersArr array
console.log(combinedArray); // Output: [1, 2, 10, 4, 5, 6, 7, 8, 9, 1]

numbersArr.slice(1, 4); // Creating a new array with elements from index 1 to 3 (not including index 4)
console.log(numbersArr.slice(1, 4)); // Output: [2, 10, 4]

numbersArr.splice(2, 1); // Removing the element at index 2 (the number 10)
console.log(numbersArr); // Output: [1, 2, 4, 5, 6]

numbersArr.splice(2, 0, 10); // Adding the number 10 back at index 2
console.log(numbersArr); // Output: [1, 2, 10, 4, 5, 6]

numbersArr.reverse(); // Reversing the order of the array
console.log(numbersArr); // Output: [6, 5, 4, 10, 2, 1]

numbersArr.sort((a, b) => a - b); // Sorting the array in ascending order
console.log(numbersArr); // Output: [1, 2, 4, 5, 6, 10]

numbersArr.sort((a, b) => b - a); // Sorting the array in descending order
console.log(numbersArr); // Output: [10, 6, 5, 4, 2, 1]

numbersArr.sort(); // Sorting the array in default order (lexicographical)
console.log(numbersArr); // Output: [1, 10, 2, 4, 5, 6]

numbersArr.indexOf(10); // Finding the index of the number 10 in the array
console.log(numbersArr.indexOf(10)); // Output: 1

numbersArr.includes(5); // Checking if the number 5 is in the array
console.log(numbersArr.includes(5)); // Output: true

numbersArr.join(","); // Joining the elements of the array into a string with a comma separator
console.log(numbersArr.join(",")); // Output: "1,10,2,4,5,6"

numbersArr.join(" - "); // Joining the elements of the array into a string with a custom separator
console.log(numbersArr.join(" - ")); // Output: "1 - 10 - 2 - 4 - 5 - 6"

numbersArr.join(); // Joining the elements of the array into a string with the default separator (comma)
console.log(numbersArr.join()); // Output: "1,10,2,4,5,6"

numbersArr.toString(); // Converting the array to a string
console.log(numbersArr.toString()); // Output: "1,10,2,4,5,6"

numbersArr.length; // Getting the length of the array
console.log(numbersArr.length); // Output: 6

numbersArr.length = 3; // Truncating the array to a length of 3
console.log(numbersArr); // Output: [1, 10, 2]

numbersArr.length = 6; // Extending the array back to a length of 6 (the new elements will be undefined)
console.log(numbersArr); // Output: [1, 10, 2, undefined, undefined, undefined]

// Iterating over arrays
// Using for loop to iterate over arrays
for (let i = 0; i < numbersArr.length; i++) {
  console.log(numbersArr[i]); // Output: 1, 2, 10, 4, 5, 6
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
]; // A 2D array (matrix) of numbersArr

console.log(matrix[0][1]); // Output: 2
console.log(matrix[2][0]); // Output: 7

// In this example, we have defined arrays of numbersArr and strings using both
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

// Using forEach method to iterate over arrays
// The `forEach` method executes a provided function once for each array element.
// It's a convenient way to iterate over arrays without needing to manage the loop
names.forEach((name) => console.log(name)); // Output: Eve, Bob
names2.forEach(function (fruitList, index) {
  console.log(`${index}: ${fruitList}`); // Output: 0: Alice, 1: Bob, 2: Charlie
});
names2.forEach((fruitList, index) => console.log(`${index}: ${fruitList}`)); // Output: 0: Alice, 1: Bob, 2: Charlie

names2.forEach((fruitList, index) => {
  console.log(fruitList.toUpperCase());
}); // Output: ALICE, BOB, CHARLIE

names2.forEach((fruitList, index) => {
  if (fruitList.startsWith("B")) {
    console.log(fruitList); // Output: Bob
  }
}); // Output: Bob

names2.forEach((fruitList, index) => {
  if (fruitList.length > 3) {
    console.log(fruitList); // Output: Alice, Charlie
  }
}); // Output: Alice, Charlie

// For example, you can use the `map` method to create a new array by applying
// a function to each element of an existing array:
let squarednumbersArr = numbersArr.map((num) => num * num);
console.log(squarednumbersArr); // Output: [1, 4, 100, 16, 25, 36]

// You can also use the `filter` method to create a new array that contains
// only the elements that satisfy a certain condition:
let evennumbersArr = numbersArr.filter((num) => num % 2 === 0);
console.log(evennumbersArr); // Output: [2, 4, 6]

let longNames = names2.filter((name) => name.length > 4);
console.log(longNames); // Output: ['Alice', 'Charlie']

let namesWithB = names2.filter((name) => name.startsWith("B"));
console.log(namesWithB); // Output: ['Bob']

// The `reduce` method can be used to accumulate values from an array into a
// single result:
let sumOfnumbersArr = numbersArr.reduce((acc, num) => acc + num);
console.log(sumOfnumbersArr); // Output: 28

let sumOfnumbersArrWithInitialValue = numbersArr.reduce(
  (acc, num) => acc + num,
  10
);
console.log(sumOfnumbersArrWithInitialValue); // Output: 38 (10 + 1 + 2 + 10 + 4 + 5 + 6)

let productOfnumbersArr = numbersArr.reduce((acc, num) => acc * num, 2);
console.log(productOfnumbersArr); // Output: 1440 (2 * 1 * 2 * 10 * 4 * 5 * 6)

// you can also use the 'some' method to check if at least one element in the array satisfies a certain condition:
let hasEvenNumber = numbersArr.some((num) => num % 2 === 0);
console.log(hasEvenNumber); // Output: true

let hasNumberGreaterThan4 = numbersArr.some((num) => num > 4);
console.log(hasNumberGreaterThan4); // Output: true

// And the 'every' method to check if all elements in the array satisfy a certain condition:
let allEvenNumbers = numbersArr.every((num) => num % 2 === 0);
console.log(allEvenNumbers); // Output: false

let allNumbersGreaterThan0 = numbersArr.every((num) => num > 0);
console.log(allNumbersGreaterThan0); // Output: true

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
