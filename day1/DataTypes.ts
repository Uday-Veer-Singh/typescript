// premituve data types
let myName: string = "John Doe"; // string
let myAge: number = 30; // number
let isStudent: boolean = true; // boolean
let mySymbol: symbol = Symbol("unique"); // symbol
let myUndefined: undefined = undefined; // undefined
let myNull: null = null; // null
let myBigInt: bigint = 9007199254740991n; // bigint
let myVoid: void = undefined; // void
let myAny: any = "This can be any type"; // any

// NUMBER TYPES - includes both integers and floating-point numbers
let age: number = 30; // number
let price: number = 19.99; // number  
let bigNumber: bigint = 9007199254740991n; // bigint
console.log("Age:", age); // output: Age: 30
console.log("Price:", price); // output: Price: 19.99
console.log("Big Number:", bigNumber); // output: Big Number: 9007199254740991n
console.log(typeof myName); // output: string
console.log(typeof(myName)); // output: string

// STRING TYPES - can be defined using single quotes, double quotes, or backticks (template literals)
// Single quotes (' ')
// Double quotes (" ")
// Backticks (` `) - template literals
let fname: string = 'John'; // using single quotes
let lName: string = "Doe"; // using double quotes
let fullName: string = `${fname} ${lName}`; // using template literals
console.log("Full Name:", fullName); // output: Full Name: John Doe

// BOOLEAN TYPES - can only be true or false
let isStudent1: boolean = true; // using boolean type
let isEmployed: boolean = false; // using boolean type
console.log("Is Student:", isStudent1); // output: Is Student: true

// Null and Undefined - represent the absence of a value or an uninitialized variable
let myNullValue: null = null; // using null type
let myUndefinedValue: undefined = undefined; // using undefined type
console.log("Null Value:", myNullValue); // output: Null Value: null
console.log("Undefined Value:", myUndefinedValue); // output: Undefined Value: undefined
let priceNull: number;
console.log(priceNull); // output: undefined (priceNull is declared but not initialized)

// ANY TYPE - allows a variable to hold any type of value, but it is generally not recommended to use this type as it can lead to unexpected behavior and makes it harder to catch errors during development
let randomValue: any = 42; // can be a number
console.log("Random Value (number):", randomValue); // output: Random Value (number): 42
randomValue= "Hello"; // can be a string
console.log("Random Value (string):", randomValue); // output: Random Value (string): Hello

// Union Types - allows a variable to hold more than one type of value
let unionValue: number | string | null; // can be a number or a string
unionValue = 100; // assigning a number
console.log("Union Value (number):", unionValue); // output: Union Value (number): 100
unionValue = "One Hundred"; // assigning a string 
console.log("Union Value (string):", unionValue); // output: Union Value (string): One Hundred
unionValue = null; // assigning null
console.log("Union Value (null):", unionValue); // output: Union Value (null): null

// VOID TYPE - used for functions that do not return a value
function logMessage(message: string): void { // function that returns void
    console.log("Log Message:", message); // output: Log Message: Hello, World!
}
logMessage("Hello, World!"); // calling the function

// non-premitive data types 
// array of numbers
let myNumbers: number[] = [1, 2, 3, 4, 5];
console.log(myNumbers); // output: [ 1, 2, 3, 4, 5 ]

//array of strings 
let myHobbies: string[] = ["Reading", "Traveling", "Cooking"]; 
console.log(myHobbies); // output: [ 'Reading', 'Traveling', 'Cooking' ]



// array of objects 
// array of objects representing people 
// interface for a person object
// 
interface Person {
    name: string;
    age: number;
    isStudent: boolean;
} 

// object of type Person
let person1: Person = {
    name: "Alice",
    age: 25,
    isStudent: false
}; 
console.log(person1); // output: { name: 'Alice', age: 25, isStudent: false }

// array of Person objects representing a list of people
let people: Person[] = [
    {
        name: "Bob",
        age: 30,
        isStudent: true
    },
    {
        name: "Charlie",
        age: 35,
        isStudent: false
    }
];
console.log(people); // output: [ { name: 'Bob', age: 30, isStudent: true }, { name: 'Charlie', age: 35, isStudent: false } ]

// class for a car object 
// class Car with properties make, model, and year, and a method getCarInfo that returns a string with the car's information

class Car {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getCarInfo(): string {
        return `${this.year} ${this.make} ${this.model}`;
    }
} 
console.log(Car); // output: [class Car]
console.log(Car.prototype); // output: { constructor: [class Car], getCarInfo: [Function: getCarInfo] }
// creating an instance of the Car class
let myCar = new Car("Toyota", "Camry", 2020);
console.log(myCar); // output: Car { make: 'Toyota', model: 'Camry', year: 2020 }
console.log(myCar.getCarInfo()); // output: 2020 Toyota Camry

// array of Car objects representing a list of cars
let cars: Car[] = [
    new Car("Honda", "Civic", 2019),
    new Car("Ford", "Mustang", 2021)
];
console.log(cars); // output: [ Car { make: 'Honda', model: 'Civic', year: 2019 }, Car { make: 'Ford', model: 'Mustang', year: 2021 } ]

// array of mixed types using union types
let mixedArray: (number | string | boolean)[] = [1, "Hello", true, 2, "World", false];
console.log(mixedArray); // output: [ 1, 'Hello', true, 2, 'World', false ]

// tuple - a fixed-length array with specified types for each element
let myTuple: [string, number, boolean] = ["John", 30, true];
console.log(myTuple); // output: [ 'John', 30, true ]

// enum - a way to define a set of named constants
enum Color {
    Red,
    Green,
    Blue
}
let myColor: Color = Color.Green;
console.log(myColor); // output: 1 (the index of the Green color in the enum)

// object with optional properties
interface User {
    name: string;
    age: number;
    email?: string; // optional property
}
let user1: User = {
    name: "Alice",
    age: 25
};
console.log(user1); // output: { name: 'Alice', age: 25 }

// object with readonly properties
interface Point {
    readonly x: number;
    readonly y: number;
}
let point1: Point = {
    x: 10,
    y: 20
};
console.log(point1); // output: { x: 10, y: 20 }

// object with index signature - allows for properties with dynamic keys

interface Dictionary {
    [key: string]: string; // index signature
}
let myDictionary: Dictionary = {
    "hello": "world",
    "foo": "bar"
};
console.log(myDictionary); // output: { hello: 'world', foo: 'bar' }

// object with method
interface Calculator {
    add(a: number, b: number): number; // method signature
}
let myCalculator: Calculator = {
    add: (a: number, b: number): number => a + b // method implementation
};
console.log(myCalculator.add(5, 10)); // output: 15

// object with nested objects
interface Address {
    street: string;
    city: string;
    country: string;
}
interface PersonWithAddress {
    name: string;
    age: number;
    address: Address; // nested object
}
let personWithAddress: PersonWithAddress = {
    name: "Bob",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "USA"
    }
};
console.log(personWithAddress); // output: { name: 'Bob', age: 30, address: { street: '123 Main St', city: 'Anytown', country: 'USA' } }

// object with optional method
interface OptionalMethod {
    name: string;
    greet?(): void; // optional method
}
let optionalMethodObj: OptionalMethod = {
    name: "Charlie"
};
console.log(optionalMethodObj); // output: { name: 'Charlie' }

// object with method that returns a promise
interface AsyncOperation {
    performAsyncTask(): Promise<string>; // method that returns a promise
}
let asyncOperationObj: AsyncOperation = {
    performAsyncTask: (): Promise<string> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("Async task completed");
            }, 1000);
        });
    }
}; 
asyncOperationObj.performAsyncTask().then(result => console.log(result)); // output: Async task completed (after 1 second)

// object with method that takes a callback function
interface CallbackOperation {
    performTaskWithCallback(callback: (result: string) => void): void; // method that takes a callback function
}
let callbackOperationObj: CallbackOperation = {
    performTaskWithCallback: (callback: (result: string) => void): void => {
        setTimeout(() => {
            callback("Task completed with callback");
        }, 1000);
    }
};
callbackOperationObj.performTaskWithCallback(result => console.log(result)); // output: Task completed with callback (after 1 second)

// object with method that takes an array of numbers and returns their sum
interface SumOperation {
    sumNumbers(numbers: number[]): number; // method that takes an array of numbers and returns their sum
}
let sumOperationObj: SumOperation = {
    sumNumbers: (numbers: number[]): number => {
        return numbers.reduce((acc, curr) => acc + curr, 0);
    }
};
console.log(sumOperationObj.sumNumbers([1, 2, 3, 4, 5])); // output: 15

// object with method that takes an object as a parameter and returns a string
interface ObjectParameterOperation {
    describePerson(person: Person): string; // method that takes an object as a parameter and returns a string
}
let objectParameterOperationObj: ObjectParameterOperation = {
    describePerson: (person: Person): string => {
        return `${person.name} is ${person.age} years old and is ${person.isStudent ? "a student" : "not a student"}.`;
    }
};
console.log(objectParameterOperationObj.describePerson(person1)); // output: Alice is 25 years old and is not a student.

// object with method that takes a string and returns a boolean indicating if the string is a palindrome
interface PalindromeChecker {
    isPalindrome(str: string): boolean; // method that takes a string and returns a boolean indicating if the string is a palindrome
}
let palindromeCheckerObj: PalindromeChecker = {
    isPalindrome: (str: string): boolean => {
        const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
        return cleanedStr === cleanedStr.split('').reverse().join('');
    }
};
console.log(palindromeCheckerObj); // output: { isPalindrome: [Function: isPalindrome] }

// object with method that takes a number and returns its factorial
interface FactorialCalculator {
    factorial(n: number): number; // method that takes a number and returns its factorial
}
let factorialCalculatorObj: FactorialCalculator = {
    factorial: (n: number): number => {
        if (n === 0 || n === 1) {
            return 1;
        }
        return n * factorialCalculatorObj.factorial(n - 1);
    }
};
console.log(factorialCalculatorObj.factorial(5)); // output: 120

//