// Basic Types in TyoeScript
// string , number , boolean , null , undefined
const x: number = 98;
console.log(x);

// problem 1
function greet(name: string) {
  console.log("Helooo", name);
}
greet("Haroon khanday");

// problem 2
function sum(a: number, b: number): number {
  return a + b;
}

console.log(sum(2, 3));

//problem 3

function isLegal(age: number): boolean {
  if (age > 18) {
    return true;
  } else {
    return false;
  }
}
console.log(isLegal(20));

//problem 4

function calledAfterOneSecond() {
  console.log("You called After One Second");
}
function takeAnotherFunctionAsInput(fn: () => void) {
  setTimeout(fn, 2000);
}
takeAnotherFunctionAsInput(calledAfterOneSecond);

function callPerviousSumFunction(fn: (a: number, b: number) => number) {
  setTimeout(() => {
    const result: number = fn(9, 7);
    console.log(result);
  }, 3000);
}
callPerviousSumFunction(sum);
