"use strict";
const user = {
    firstName: "hk",
    lastName: "kh",
    address: "GPU",
    age: 21,
    isLegalToVote: false,
};
function isLegalToVote(user) {
    if (user.age > 18) {
        user.isLegalToVote = true;
        return true;
    }
    else {
        return false;
    }
}
console.log(isLegalToVote(user));
console.log(user);
function findMaxNumber(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
const maxResult = findMaxNumber([
    34, 45, 65, 3, 4, 2, 65, 4545, 4434, 4545, 8, 0, 343, 232, 4, 45, 1, 2, 7, 92,
]);
console.log(maxResult);
