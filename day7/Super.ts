/** @format */

// Super() - used to invoke parent class constructor
// Super - used to invoke parent class method
// Super - cannot be used to invoke parent class property

class Parent {
  num: number = 1;

  constructor() {
    console.log("parent constructor");
  }

  show() {
    console.log("parent show()");
  }
}

class Child extends Parent {
  num: number = 2; // overriden

  constructor() {
    console.log("child constructor");
    super(); // This will call parent class constructor (must be called)
  }

  show() {
    // Override Method
    super.show();
    console.log("child show()");
  }

  show1() {
    // console.log(super.num); // Parent's num
    // TS deos not support supper.property to access parent class properties
    // directly
    console.log(this.num);
    console.log("child show1()");
  }
}

let c1 = new Child();

c1.show();

c1.show1();
