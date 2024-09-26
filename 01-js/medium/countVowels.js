/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  const vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];
  let count = 0;
  for (const letter of str) {
    if (vowels.includes(letter)) count++;
  }
  return count;
}

module.exports = countVowels;
