interface person {
  name: string;
  age: number;
  greet: (phrase: string) => void;
}
class Employee implements person {
  name: string;
  age: number;

  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }

  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  }
}

const emp = new Employee("Haroon", 25);
emp.greet("Hello, I am"); // Output: Hello, I am Haroon
