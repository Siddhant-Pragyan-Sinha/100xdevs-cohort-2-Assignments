"use strict";
const x = 98;
console.log(x);
function greet(name) {
    console.log("Helooo", name);
}
greet("Haroon khanday");
function sum(a, b) {
    return a + b;
}
console.log(sum(2, 3));
function isLegal(age) {
    if (age > 18) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isLegal(20));
function calledAfterOneSecond() {
    console.log("You called After One Second");
}
function takeAnotherFunctionAsInput(fn) {
    setTimeout(fn, 2000);
}
takeAnotherFunctionAsInput(calledAfterOneSecond);
function callPerviousSumFunction(fn) {
    setTimeout(() => {
        const result = fn(9, 7);
        console.log(result);
    }, 3000);
}
callPerviousSumFunction(sum);
