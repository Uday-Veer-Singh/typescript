// while loop
// loop until the condition is true
let i: number = 0;
while (i < 5) {
    console.log(i);
    i++;
} // output: 0 1 2 3 4

// print even numbers from 0 to 10
let num: number = 0;
while (num <= 10) {
    if (num % 2 === 0) {
        console.log(num);
    }
    num++;
} // output: 0 2 4 6 8 10

// print odd numbers from 0 to 10
let oddNum: number = 0;
while (oddNum <= 10) {
    if (oddNum % 2 !== 0) {
        console.log(oddNum);
    }
    oddNum++;
} // output: 1 3 5 7 9

// print numbers from 10 to 0
let count: number = 10;
while (count >= 0) {
    console.log(count);
    count--;
} // output: 10 9 8 7 6 5 4 3 2 1 0

// print the first 5 multiples of 3
let multiple: number = 1;
while (multiple <= 5) {
    console.log(multiple * 3);
    multiple++;
} // output: 3 6 9 12 15

// do while loop
// loop at least once and then check the condition
let j: number = 0;
do {
    console.log(j);
    j++;
} while (j < 5); // output: 0 1 2 3 4

// print numbers from 0 to 5 using do while loop
let k: number = 0;
do {
    console.log(k);
    k++;
} while (k <= 5); // output: 0 1 2 3 4 5

// print the first 5 multiples of 4 using do while loop
let multipleOf4: number = 1;
do {
    console.log(multipleOf4 * 4);
    multipleOf4++;
} while (multipleOf4 <= 5); // output: 4 8 12 16 20

// for loop
// loop with initialization, condition and increment/decrement
for (let k: number = 0; k < 5; k++) {
    console.log(k);
} // output: 0 1 2 3 4

// print even numbers from 0 to 10 using for loop
for (let num: number = 0; num <= 10; num++) {
    if (num % 2 === 0) {
        console.log(num);
    }
} // output: 0 2 4 6 8 10   

// print odd numbers from 0 to 10 using for loop
for (let oddNum: number = 0; oddNum <= 10; oddNum++) {
    if (oddNum % 2 !== 0) {
        console.log(oddNum);
    }
} // output: 1 3 5 7 9

// print numbers from 10 to 0 using for loop
for (let count: number = 10; count >= 0; count--) {
    console.log(count);
} // output: 10 9 8 7 6 5 4 3 2 1 0

// print the first 5 multiples of 3 using for loop
for (let multiple: number = 1; multiple <= 5; multiple++) {
    console.log(multiple * 3);
} // output: 3 6 9 12 15

// infinite loop
// loop forever until break statement is encountered
while (true) {
   console.log("Infinite loop");
// break; // to exit the loop
} // output: Infinite loop

// for of loop
// loop through iterable objects like arrays, strings, etc.
let arr: number[] = [1, 2, 3, 4, 5];
for (let num of arr) {
    console.log(num);
} // output: 1 2 3 4 5

// loop through a string
let str: string = "Hello";
for (let char of str) {
    console.log(char);
} // output: H e l l o

// loop through a Set
let mySet: Set<number> = new Set([1, 2, 3, 4, 5]);
for (let num of mySet) {
    console.log(num);
} // output: 1 2 3 4 5

// loop through a Map
let myMap: Map<string, number> = new Map([["a", 1], ["b", 2], ["c", 3]]);
for (let [key, value] of myMap) {
    console.log(`${key}: ${value}`);
} // output: a: 1 b: 2 c: 3

// loop through a string array
let stringArray: string[] = ["apple", "banana", "cherry"];
for (let fruit of stringArray) {
    console.log(fruit);
} // output: apple banana cherry

// loop through a Set of strings
let stringSet: Set<string> = new Set(["red", "green", "blue"]);
for (let color of stringSet) {
    console.log(color);
} // output: red green blue

// loop through a Map of string keys and number values
let stringNumberMap: Map<string, number> = new Map([["x", 10], ["y", 20], ["z", 30]]);
for (let [key, value] of stringNumberMap) {
    console.log(`${key}: ${value}`);
} // output: x: 10 y: 20 z: 30

// for in loop
// loop through the properties of an object
let obj: { [key: string]: any } = { name: "Alice", age: 30, city: "New York" };
for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
} // output: name: Alice age: 30 city: New York

// loop through an array using for in loop (not recommended)
let arr2: number[] = [10, 20, 30, 40, 50];
for (let index in arr2) {
    console.log(arr2[index]);
} // output: 10 20 30 40 50

// loop through a string using for in loop (not recommended)
let str2:any = "World";
for (let index in str2) {
    console.log(str2[index]);
} // output: W o r l d

// loop through a Set using for in loop (not recommended)
let mySet2: Set<number> = new Set([10, 20, 30, 40, 50]);
for (let index in mySet2) {
    console.log(index); // output: 0 1 2 3 4 (not the actual values of the Set)
}

// break statement
// exit the loop when a condition is met
for (let i: number = 0; i < 10; i++) {
    if (i === 5) {
        break; // exit the loop when i is 5
    }
    console.log(i);
} // output: 0 1 2 3 4

// break statement in nested loops
for (let i: number = 1; i <= 3; i++) {
    for (let j: number = 1; j <= 3; j++) {
        if (i === 2 && j === 2) {
            break; // exit the inner loop when i is 2 and j is 2
        }
        console.log(`i: ${i}, j: ${j}`);
    }
} // output: i: 1, j: 1 i: 1, j: 2 i: 1, j: 3 i: 2, j: 1 i: 2, j: 2 i: 3, j: 1 i: 3, j: 2 i: 3, j: 3

// break statement with labeled statements
outerLoop2: for (let i: number = 0; i < 3; i++) {
    innerLoop2: for (let j: number = 0; j < 3; j++) {
        if (i === 1 && j === 1) {
            break outerLoop2; // exit the outer loop when i is 1 and j is 1
        }
        console.log(`i: ${i}, j: ${j}`);
    }
} // output: i: 0, j: 0 i: 0, j: 1 i: 0, j: 2 i: 1, j: 0 i: 1, j: 1

// continue statement
// skip the current iteration when a condition is met
for (let i: number = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue; // skip even numbers
    }
    console.log(i);
} // output: 1 3 5 7 9

// continue statement in nested loops
for (let i: number = 1; i <= 3; i++) {
    for (let j: number = 1; j <= 3; j++) {
        if (i === 2 && j === 2) {
            continue; // skip the iteration when i is 2 and j is 2
        }
        console.log(`i: ${i}, j: ${j}`);
    }
} // output: i: 1, j: 1 i: 1, j: 2 i: 1, j: 3 i: 2, j: 1 i: 2, j: 3 i: 3, j: 1 i: 3, j: 2 i: 3, j: 3

// nested loops
// loop inside another loop
for (let i: number = 1; i <= 3; i++) {
    for (let j: number = 1; j <= 3; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
} // output: i: 1, j: 1 i: 1, j: 2 i: 1, j: 3 i: 2, j: 1 i: 2, j: 2 i: 2, j: 3 i: 3, j: 1 i: 3, j: 2 i: 3, j: 3

// nested loops with break statement
for (let i: number = 1; i <= 3; i++) {
    for (let j: number = 1; j <= 3; j++) {
        if (i === 2 && j === 2) {
            break; // exit the inner loop when i is 2 and j is 2
        }
        console.log(`i: ${i}, j: ${j}`);
    }
} // output: i: 1, j: 1 i: 1, j: 2 i: 1, j: 3 i: 2, j: 1 i: 2, j: 2 i: 3, j: 1 i: 3, j: 2 i: 3, j: 3

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

// labeled continue statement
outerLoop2: for (let i: number = 0; i < 3; i++) {
    innerLoop2: for (let j: number = 0; j < 3; j++) {
        if (i === 1 && j === 1) {
            continue outerLoop2; // skip the outer loop iteration when i is 1 and j is 1
        }
        console.log(`i: ${i}, j: ${j}`);
    }
} // output: i: 0, j: 0 i: 0, j: 1 i: 0, j: 2 i: 1, j: 0 i: 1, j: 1 i: 2, j: 0 i: 2, j: 1 i: 2, j: 2
