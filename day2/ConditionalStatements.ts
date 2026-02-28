// if condition
// The if statement is used to execute a block of code only if a specified condition is true. If the condition evaluates to false, the code block will be skipped and the program will continue with the next statement after the if block. The syntax for an if statement is as follows:
/*
if(condition)
    {
    //code to be executed if condition is true
    }
*/

let age: number = 20;
if (age >= 18) {
    console.log("You are eligible to vote.");
} // Output: You are eligible to vote.

// check if the character is uppercase
let char: string = 'A';
if (char === char.toUpperCase()) {
    console.log(`${char} is an uppercase letter.`);
} // Output: A is an uppercase letter.  

// check if the number is multiple of 10
let num: number = 50;
if (num % 10 === 0) {
    console.log(`${num} is a multiple of 10.`);
} // Output: 50 is a multiple of 10.

///////////////////////////////////////////////////////////////////////////////

// if-else condition
// The if-else statement allows you to execute one block of code if a condition is true and another block of code if the condition is false. It provides an alternative path of execution when the condition is not met.
/*
if(condition)
    {
    //code to be executed if condition is true
    }
else
    {
    //code to be executed if condition is false
    }       
*/

let number: number = 10;
if (number % 2 === 0) {
    console.log("The number is even.");
}
else {
    console.log("The number is odd.");
} //  Output: The number is even.

// check if the person is teenager (age between 13 to 19)
let personAge: number = 27;
if (personAge >= 13 && personAge <=19) {
    console.log("The person is a teenager.");
}
else {
    console.log("The person is not a teenager.");
} // Output: The person is not a teenager.

// comapre 2 numbers and print the larger one
let num1: number = 66;
let num2: number = 42;
if (num1 > num2) {
    console.log(`${num1} is larger than ${num2}.`);
} else {
    console.log(`${num2} is larger than ${num1}.`);
} // Output: 66 is larger than 42.

// check if number is positive, negative, or zero.
let numberToCheck: number = -0.1;
if (numberToCheck === 0) {
    console.log("The number is zero.");
} else if (numberToCheck < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is positive.");
} // Output: The number is negative.

// check if a person is eligible for a senior citizen discount (age 60 or above)
let seniorAge: number = 57;
if (seniorAge >= 60) {
    console.log("The person is eligible for a senior citizen discount.");
} else {
    console.log("The person is not eligible for a senior citizen discount.");
} // Output: The person is not eligible for a senior citizen discount.

///////////////////////////////////////////////////////////////////////////////

// nested if else or if-else-if condition
// The if-else-if statement allows you to test multiple conditions. It executes the block of code corresponding to the first true condition and skips the rest. If none of the conditions are true, it executes the code in the else block (if provided).
/*
if(condition1)
    {
    //code to be executed if condition1 is true
    }
else if(condition2)
    {
    //code to be executed if condition2 is true
    } 
else
    {
    //code to be executed if both condition1 and condition2 are false
    }
*/  

let marks: number = 85;
if (marks >= 90) {
    console.log("Grade: A");
}
else if (marks >= 80) {
    console.log("Grade: B");
}
else if (marks >= 70) {
    console.log("Grade: C");
}
else if (marks >= 60) {
    console.log("Grade: D");
}
else {
    console.log("Grade: F");
} // Output: Grade: B

// check if a numbee is positive and even
let numnberToCheck2: number = -12;
if (numnberToCheck2 > 0) {
    if (numnberToCheck2 % 2 === 0) {
        console.log("The number is positive and even.");
    } else if (numnberToCheck2 < 0 ) {
        if (numnberToCheck2 % 2 === 0) {
            console.log("The number is negative and even.");
        } else {
            console.log("The number is negative and odd.");
        }
} else { 
    console.log("The number is positive and odd.");
}  // Output: The number is negative and even.

// check if a character is an uppercase vowel.
let character: string = 'L';
if (character == character.toUpperCase() && ['A', 'E', 'I', 'O', 'U'].includes(character)) {
    console.log(`${character} is an uppercase vowel.`);
} else if (character == character.toLowerCase() && ['a', 'e', 'i', 'o', 'u'].includes(character)) {

    console.log(`${character} is a lowercase vowel.`);
} else if (character == character.toLowerCase() && !['a', 'e', 'i', 'o', 'u'].includes(character)) {
    console.log(`${character} is a lowercase non vowel.`);
} else {
    console.log(`${character} is an uppercase non vowel.`);
} // Output: L is an uppercase non vowel.

// find the largest of three numbers
let numA: number = 15;
let numB: number = 25;
let numC: number = 10;
if (numA >= numB && numA >= numC) {
    console.log(`${numA} is the largest number.`);
} else if (numB >= numA && numB >= numC) {  
    console.log(`${numB} is the largest number.`);
} else {
    console.log(`${numC} is the largest number.`);
} // Output: 25 is the largest number.

// check if the number is multiple of both 5 and 10
let numberToCheck3: number = 5;
if (numberToCheck3 % 5 === 0 && numberToCheck3 % 10 === 0) {
    console.log(`${numberToCheck3} is a multiple of both 5 and 10.`);
} else if (numberToCheck3 % 5 === 0) {  
    console.log(`${numberToCheck3} is a multiple of 5 but not a multiple of 10.`);
} else if (numberToCheck3 % 10 === 0) {
    console.log(`${numberToCheck3} is a multiple of 10 but not a multiple of 5.`);
} else {
    console.log(`${numberToCheck3} is not a multiple of either 5 or 10.`);
}  // Output: 5 is a multiple of 5 but not a multiple of 10.

// check if the 

///////////////////////////////////////////////////////////////////////////////

// switch statement
// The switch statement is a control flow statement that allows you to execute different blocks of code based on the value of a variable or expression. It provides a more concise and readable way to handle multiple conditions compared to using multiple if-else statements.
/*
switch(expression)
    {
    case value1:
        //code to be executed if expression matches value1
        break;
    case value2:
        //code to be executed if expression matches value2
        break;
    ...
    default:
        //code to be executed if expression doesn't match any of the cases
    }
*/
let day: number = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day number.");
} // Output: Wednesday

///////////////////////////////////////////////////////////////////////////////

// ternary operator
// The ternary operator is a shorthand way of writing an if-else statement. It takes three operands: a condition, an expression to execute if the condition is true, and an expression to execute if the condition is false. The syntax for the ternary operator is as follows:
/*  
condition ? expression_if_true : expression_if_false
*/
let isRaining: boolean = true;
let weather: string = isRaining ? "It's raining outside." : "It's sunny outside.";
console.log(weather); // Output: It's raining outside.

// The ternary operator can also be nested to handle multiple conditions. For example:
let score: number = 85;
let grade: string = score >= 90 ? "A" :
    score >= 80 ? "B" :
        score >= 70 ? "C" :
            score >= 60 ? "D" : "F";
console.log(`Grade: ${grade}`); // Output: Grade: B
