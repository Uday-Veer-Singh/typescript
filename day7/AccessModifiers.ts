/** @format */

// Parent Class
class Parent {
  public name: string; // accessible anywhere
  protected age: string; // accessible within the class and it's subclass
  private color: string; // accessible only within class

  constructor(name: string, age: string, color: string) {
    this.name = name;
    this.age = age;
    this.color = color;
  }

  displayInfo() {
    console.log("Name", this.name);
    console.log("Age", this.age);
    console.log("Color", this.color);
  }
}

// Child class
class emp1 extends Parent {
  private empId: number;

  constructor(name: string, age: string, color: string, empId: number) {
    super(name, age, color);
    this.empId = empId;
  }

  showEmpDetails() {
    console.log(this.name);
    console.log(this.age);
    // console.log(this.color); // private property in parent class
    console.log(this.empId); // private property but in same class
  }
}

let emp = new emp1("tara", "29", "dark", 101);

emp.displayInfo();
emp.showEmpDetails();
// emp.color;
// Property 'color' is private and only accessible within class 'Parent'.
