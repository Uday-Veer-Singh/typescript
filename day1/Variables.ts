var naam = 'name'
console.log(naam);

//Scope
// var
function varScope()
{
	if(true)
	{
		var msg = 'Hello World';
		// console.log(msg)
	}
  console.log(msg)
}
varScope();

// let and const
function blockScope()
{
	if(true)
	{
		let msg = 'msg';
		const ltr = 'ltr';
		// console.log(msg)
    // console.log(ltr);
	}
  	// console.log(msg)
    // console.log(ltr);
}
blockScope();

// Declaration/Value Assignment
// var
var a; // Declaration
console.log(a);
a = 10; // Value Assignment
console.log(a);

// let
let b; // Declaration
console.log(b);
b = 20; // Value Assignment
console.log(b);

// const
const z = 'const'; // Declaration and Value Assignment
console.log(z);

// Re-Declaration
// var allow re-declaration
var n = 'var';
var n = 'var again';
console.log(n);

// let and const do not allow re-declaration
let m = 'let';
// let m = 'let again'; // Error: Identifier 'm' has already been declared
console.log(m);

const p = 'const';
const p = 'const again'; // Error: Identifier 'p' has already been declared
console.log(p);

// Re-initialization/Re-assignment
// var and let allow re-assignment
var x = 5;
x = 10; // Re-assignment
console.log(x);

let y = 15;
y = 25; // Re-assignment
console.log(y);

// const does not allow re-assignment
const q = 30;
// q = 40; // Error: Assignment to constant variable.
console.log(q);

// Hoisting
// var is hoisted and initialized with undefined
console.log(hoistedVar); // Output: undefined
var hoistedVar = 'I am hoisted';
console.log(hoistedVar)

// let and const are hoisted but not initialized
console.log(hoistedLet); // Error: Cannot access 'hoistedLet' before initialization
let hoistedLet = 'I am hoisted but not initialized';
console.log(hoistedLet);

console.log(hoistedconst); // Error: Cannot access 'hoistedconst' before initialization 
const hoistedconst = 'I am hoisted but not initialized';
console.log(hoistedconst);