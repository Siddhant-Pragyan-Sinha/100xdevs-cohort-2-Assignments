// ow can you assign types to objects? For example, a user object that looks like this -
interface User {
  firstName: string;
  lastName: string;
  address: string;
  age: number;
  isLegalToVote: boolean;
}

const user = {
  firstName: "hk",
  lastName: "kh",
  address: "GPU",
  age: 21,
  isLegalToVote: false,
};

// Assignment #1 - Create a function isLegal that returns true or false if a user is above 18. It takes a user as an input.
function isLegalToVote(user: User) {
  if (user.age > 18) {
    user.isLegalToVote = true;
    return true;
  } else {
    return false;
  }
}
console.log(isLegalToVote(user));
console.log(user);

// Given an array of positive integers as input, return the maximum value in the array
function findMaxNumber(arr: number[]): number {
  let max: number = arr[0];
  for (let i: number = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
const maxResult: number = findMaxNumber([
  34, 45, 65, 3, 4, 2, 65, 4545, 4434, 4545, 8, 0, 343, 232, 4, 45, 1, 2, 7, 92,
]);
console.log(maxResult);
