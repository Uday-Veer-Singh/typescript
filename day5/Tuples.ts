/** @format */

// Tuples
// are defined using square brackets and can have a fixed number of elements with specific types. For example:
// Defining a tuple with specific types
let person: [string, number] = ["Alice", 30]; // A tuple with a string and a number
// Accessing tuple elements
console.log(person[0]); // Output: Alice
console.log(person[1]); // Output: 30

// Modifying tuple elements
person[0] = "Bob"; // Modifying the first element of the tuple
person[1] = 25; // Modifying the second element of the tuple
console.log(person); // Output: ['Bob', 25]

// Tuples can also be used to represent more complex data structures, such as a point in 2D space:
type Point = [number, number]; // A tuple representing a point in 2D space
let point: Point = [10, 20]; // A point with x and y coordinates
console.log(point[0]); // Output: 10 (x coordinate)
console.log(point[1]); // Output: 20 (y coordinate)

// In this example, we have defined a tuple called `person` that contains a string (the person's name) and a number (the person's age). We have also defined a type alias `Point` for a tuple that represents a point in 2D space, and we created an instance of that tuple to represent a specific point.

// Tuples are useful when you want to group together a fixed number of values of different types, and they can be used in various scenarios such as returning multiple values from a function or representing structured data.
