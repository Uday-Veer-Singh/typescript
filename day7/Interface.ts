/**
 * An interface is TS is a way to define the structure of an object.
 * It tells the compiler what properties and tyopes an object shold have.
 * It's like a blueprint for objects.
 *
 * Abstract method: only signature of the methods (no implementation)
 *
 * @format
 */

interface MineAI {
  name: string;
  age: number;

  show(): void;
}

let yourAI: MineAI = { name: "mine", age: 23, show() {} };

console.log(yourAI.name);
console.log(yourAI.age);
console.log(yourAI);

let youAI1: MineAI = {
  name: "pop",
  age: 77,

  show() {
    console.log(yourAI.name, youAI1.age);
  },
};

youAI1.show();
