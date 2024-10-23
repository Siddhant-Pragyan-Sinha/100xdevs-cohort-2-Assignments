// number
let x: number = 2;
console.log("The Number:", x);

// string
let y: string = "HK";
console.log("The String:", y);

// boolean
let z: boolean = true;
console.log("The Boolean:", z);

// undefined
let xy: number | undefined;
// Use union type to allow both number and undefined
console.log("The Undefined:", xy);

// Reassigning to number
xy = 45;
console.log("Reassigned to Number:", xy);

//How to give types to arguments of a function
function greet(name: string) {
  console.log("Hey!!", name);
}
greet("Haroon");

//How to assign a return type to a function
function sum(a: number, b: number): number {
  return a + b;
}
const sumResult: number = sum(9, 9);
console.log("sum is", sumResult);

//Thing to learn - Type inference
function isLegal(age: number) {
  if (age > 18) {
    return true;
  } else {
    return false;
  }
}

const isLegalResult: boolean = isLegal(21);
console.log("is HK okay for vote", isLegalResult);

//Create a function that takes another function as input, and runs it after 2 second.
function callByAnotherFunctio() {
  console.log("I got called by another function");
}

//here below function will call above function
function callAboveFuntion(fn: () => void) {
  setTimeout(fn, 2000);
}
//call
callAboveFuntion(callByAnotherFunctio);
