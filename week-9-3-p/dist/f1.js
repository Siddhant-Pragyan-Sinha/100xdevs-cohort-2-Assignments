"use strict";
let x = 2;
console.log("The Number:", x);
let y = "HK";
console.log("The String:", y);
let z = true;
console.log("The Boolean:", z);
let xy;
console.log("The Undefined:", xy);
xy = 45;
console.log("Reassigned to Number:", xy);
function greet(name) {
    console.log("Hey!!", name);
}
greet("Haroon");
function sum(a, b) {
    return a + b;
}
const sumResult = sum(9, 9);
console.log("sum is", sumResult);
function isLegal(age) {
    if (age > 18) {
        return true;
    }
    else {
        return false;
    }
}
const isLegalResult = isLegal(21);
console.log("is HK okay for vote", isLegalResult);
function callByAnotherFunctio() {
    console.log("I got called by another function");
}
function callAboveFuntion(fn) {
    setTimeout(fn, 2000);
}
callAboveFuntion(callByAnotherFunctio);
