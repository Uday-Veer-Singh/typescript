// while loop
// loop until the condition is true
let i: number = 0;
while (i < 5) {
    console.log(i);
    i++;
} // output: 0 1 2 3 4

// do while loop
// loop at least once and then check the condition
let j: number = 0;
do {
    console.log(j);
    j++;
} while (j < 5); // output: 0 1 2 3 4

// for loop
// loop with initialization, condition and increment/decrement
for (let k: number = 0; k < 5; k++) {
    console.log(k);
} // output: 0 1 2 3 4

// infinite loop
// loop forever until break statement is encountered
while (true) {
   console.log("Infinite loop");
break; // to exit the loop
} // output: Infinite loop

// for of loop
// loop through iterable objects like arrays, strings, etc.
let arr: number[] = [1, 2, 3, 4, 5];
for (let num of arr) {
    console.log(num);
} // output: 1 2 3 4 5

// for in loop
// loop through the properties of an object
let obj: { [key: string]: any } = { name: "Alice", age: 30, city: "New York" };
for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
} // output: name: Alice age: 30 city: New York

// break statement
// exit the loop when a condition is met
for (let i: number = 0; i < 10; i++) {
    if (i === 5) {
        break; // exit the loop when i is 5
    }
    console.log(i);
} // output: 0 1 2 3 4

// continue statement
// skip the current iteration when a condition is met
for (let i: number = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue; // skip even numbers
    }
    console.log(i);
} // output: 1 3 5 7 9

// nested loops
// loop inside another loop
for (let i: number = 1; i <= 3; i++) {
    for (let j: number = 1; j <= 3; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
} // output: i: 1, j: 1 i: 1, j: 2 i: 1, j: 3 i: 2, j: 1 i: 2, j: 2 i: 2, j: 3 i: 3, j: 1 i: 3, j: 2 i: 3, j: 3

// labeled statements
// label a loop and use break or continue with the label to control the flow
outerLoop: for (let i: number = 0; i < 3; i++) {
    innerLoop: for (let j: number = 0; j < 3; j++) {
        if (i === 1 && j === 1) {
            break outerLoop; // exit the outer loop when i is 1 and j is 1
        }
        console.log(`i: ${i}, j: ${j}`);
    }
} // output: i: 0, j: 0 i: 0, j: 1 i: 0, j: 2 i: 1, j: 0 i: 1, j: 1
