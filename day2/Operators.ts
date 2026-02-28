let a: number = 10;
let b: number = 20; 

// you can declare 2 variables in one line
let c: number = 30, d: number = 40;

// Arithmetic Operators
// Arithmetic operators are used to perform mathematical operations on numbers. The common arithmetic operators are +, -, *, /, %, ++, and --.
console.log("a + b = " + (a + b)); // Addition Output = a + b = 30
console.log("a - b = " + (a - b)); // Subtraction Output = a - b = -10
console.log("a * b = " + (a * b)); // Multiplication Output = a * b = 200
console.log("a / b = " + (a / b)); // Division Output = a / b = 0.5
console.log("a % b = " + (a % b)); // Modulus Output = a % b = 10
console.log("a++ = " + (a++)); // Increment Output = a++ = 10
console.log("a-- = " + (a--)); // Decrement Output = a-- = 11
console.log("++a = " + (++a)); // Pre-increment Output = ++a = 11
console.log("--a = " + (--a)); // Pre-decrement Output = --a = 10

// Assignment Operators
// Assignment operators are used to assign values to variables. The common assignment operators are =, +=, -=, *=, /=, and %=.
a += 5; // a = a + 5
console.log("a += 5 => " + a); // Output = a += 5 => 15
a -= 5; // a = a - 5
console.log("a -= 5 => " + a); // Output = a -= 5 => 10
a *= 2; // a = a * 2
console.log("a *= 2 => " + a); // Output = a *= 2 => 20
a /= 2; // a = a / 2
console.log("a /= 2 => " + a); // Output = a /= 2 => 10
a %= 3; // a = a % 3
console.log("a %= 3 => " + a); // Output = a %= 3 => 1

// Comparison Operators or Relational Operators
// Comparison operators are used to compare two values and return a boolean value (true or false) based on the result of the comparison. The common comparison operators are ==, !=, >, <, >=, and <=.
console.log("a == b => " + (a == b)); // Output = a == b => false
console.log("a != b => " + (a != b)); // Output = a != b => true
console.log("a > b => " + (a > b)); // Output = a > b => false
console.log("a < b => " + (a < b)); // Output = a < b => true
console.log("a >= b => " + (a >= b)); // Output = a >= b => false
console.log("a <= b => " + (a <= b)); // Output = a <= b => true

// Logical Operators
// Logical operators are used to combine multiple conditions and return a boolean value based on the result of those conditions. The common logical operators are AND (&&), OR (||), and NOT (!).
let x: boolean = true;
let y: boolean = false;
console.log("x && y => " + (x && y)); // Output = x && y => false
console.log("x || y => " + (x || y)); // Output = x || y => true
console.log("!x => " + (!x)); // Output = !x => false
console.log("!y => " + (!y)); // Output = !y => true

// Ternary Operator 
// Syntax: condition ? expressionIfTrue : expressionIfFalse
// Example: Check if a is greater than b
let result: string = (a > b) ? "a is greater than b" : "a is not greater than b";
console.log(result); // Output = a is not greater than b

// TypeScript also supports bitwise operators, which are used to perform bit-level operations on binary numbers. The common bitwise operators are &, |, ^, ~, <<, >>, and >>>.

// Bitwise Operators
let num1: number = 5; // In binary: 0101
let num2: number = 3; // In binary: 0011
console.log("num1 & num2 => " + (num1 & num2)); // Output = num1 & num2 => 1 (In binary: 0001)
