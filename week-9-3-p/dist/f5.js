"use strict";
function identity(arg) {
    return arg;
}
const output1 = identity("Harry");
console.log("OutPut 1", output1, output1.toUpperCase());
const output2 = identity(343);
console.log("outPut 2", output2);
const output3 = identity(true);
console.log("outPut 3 ", output3);
function getFirstElement(arr) {
    return arr[0];
}
;
const element1 = getFirstElement(["Jhonathan", "Tan", "Dire", "Mosr"]);
console.log("Element 1", element1, element1.toUpperCase());
const element2 = getFirstElement([2, 3, 4, 6, 7]);
console.log("Element 2", element2, element2 * Math.random());
