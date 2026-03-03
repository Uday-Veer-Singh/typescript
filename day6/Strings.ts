/** @format */

// Strings
// Strings are a sequence of characters used to represent text. In TypeScript, you can define strings using either single quotes (' '), double quotes (" "), or backticks (` `) for template literals. Template literals allow for string interpolation and multiline strings.
// String manipulation methods are also available to perform various operations on strings, such as concatenation, slicing, and searching.
// Here are some examples of working with strings in TypeScript:

let nameString: string = "Alice";
let greeting: string = "Hello, " + nameString + "!"; // Concatenating strings using the + operator
console.log(greeting); // Output: Hello, Alice!

let stringConcat: string = "Hello, ".concat(nameString, "!"); // Concatenating strings using the concat method
console.log(stringConcat); // Output: Hello, Alice!

let stringConcat2: string = `${greeting.concat} ${nameString}!`; // Concatenating strings using template literals
console.log(stringConcat); // Output: Hello, Alice!

let age: number = 30;
let ageMessage: string = `I am ${age} years old.`; // Using template literals for string interpolation
console.log(ageMessage); // Output: I am 30 years old.

let multilineString: string = `This is a
multiline string.`; // Using template literals to create a multiline string
console.log(multilineString); // Output: This is a multiline string.

let upperCaseName: string = nameString.toUpperCase(); // Converting the string to uppercase
console.log(upperCaseName); // Output: ALICE

let lowerCaseName: string = nameString.toLowerCase(); // Converting the string to lowercase
console.log(lowerCaseName); // Output: alice

let nameLength: number = nameString.length; // Getting the length of the string
console.log(nameLength); // Output: 5

let firstCharacter: string = nameString.charAt(0); // Getting the first character of the string
console.log(firstCharacter); // Output: A

let substring: string = nameString.substring(1, 4); // Getting a substring from the string
console.log(substring); // Output: lic

let replacedString: string = nameString.replace("Alice", "Bob"); // Replacing a substring in the string
console.log(replacedString); // Output: Bob

let splitString: string[] = nameString.split(""); // Splitting the string into an array of characters
console.log(splitString); // Output: ["A", "l", "i", "c", "e"]

let trimmedString: string = "   Hello, World!   ".trim(); // Trimming whitespace from the string
console.log(trimmedString); // Output: Hello, World!

let includesSubstring: boolean = nameString.includes("lic"); // Checking if the string includes a substring
console.log(includesSubstring); // Output: true

let startsWithSubstring: boolean = nameString.startsWith("Al"); // Checking if the string starts with a substring
console.log(startsWithSubstring); // Output: true

let endsWithSubstring: boolean = nameString.endsWith("ce"); // Checking if the string ends with a substring
console.log(endsWithSubstring); // Output: true

let charAtIndex: string = nameString.charAt(2); // Getting the character at a specific index in the string
console.log(charAtIndex); // Output: i

let indexOfSubstring: number = nameString.indexOf("i"); // Finding the index of a substring in the string
console.log(indexOfSubstring); // Output: 2

let replaceString = nameString.replace("i", "y"); // Replacing the first occurrence of a substring in the string
console.log(replaceString); // Output: Alyce

let lastIndexOfSubstring: number = nameString.lastIndexOf("i"); // Finding the last index of a substring in the string
console.log(lastIndexOfSubstring); // Output: 2

let repeatedString: string = nameString.repeat(3); // Repeating the string a specified number of times
console.log(repeatedString); // Output: AliceAliceAlice

let paddedString: string = nameString.padStart(10, "*"); // Padding the string at the start with a specified character
console.log(paddedString); // Output: *****Alice

let paddedEndString: string = nameString.padEnd(10, "*"); // Padding the string at the end with a specified character
console.log(paddedEndString); // Output: Alice*****

let slicedString: string = nameString.slice(1, 4); // Slicing the string to get a substring
console.log(slicedString); // Output: lic

let splitBySpace: string[] = "Hello World".split(" "); // Splitting a string by space into an array of words
console.log(splitBySpace); // Output: ["Hello", "World"]

let joinedString: string = splitBySpace.join(", "); // Joining an array of strings into a single string with a separator
console.log(joinedString); // Output: Hello, World

let stringArray: string[] = ["Hello", "World"];
let joinedStringFromArray: string = stringArray.join(" "); // Joining an array of strings into a single string with a space separator
console.log(joinedStringFromArray); // Output: Hello World

let stringWithWhitespace: string = "   Hello, World!   ";
let trimmedStringWithWhitespace: string = stringWithWhitespace.trim(); // Trimming whitespace from the string
console.log(trimmedStringWithWhitespace); // Output: Hello, World!

let stringWithNewlines: string = "Hello,\nWorld!";
let trimmedStringWithNewlines: string = stringWithNewlines.trim(); // Trimming whitespace and newlines from the string
console.log(trimmedStringWithNewlines); // Output: Hello, World!

let stringWithTrimStart: string = "   Hello, World!";
let trimmedStringWithTrimStart: string = stringWithTrimStart.trimStart(); // Trimming whitespace from the start of the string
console.log(trimmedStringWithTrimStart); // Output: Hello, World!

let stringWithTrimEnd: string = "Hello, World!   ";
let trimmedStringWithTrimEnd: string = stringWithTrimEnd.trimEnd(); // Trimming whitespace from the end of the string
console.log(trimmedStringWithTrimEnd); // Output: Hello, World!

// string immutability
// Strings in TypeScript are immutable, which means that once a string is created, it cannot be changed. Any operation that modifies a string will create a new string instead of altering the original string. This is an important concept to understand when working with strings in TypeScript.

let originalString: string = "Hello";
let modifiedString: string = originalString.replace("H", "J"); // Modifying the string creates a new string
console.log(originalString); // Output: Hello
console.log(modifiedString); // Output: Jello
