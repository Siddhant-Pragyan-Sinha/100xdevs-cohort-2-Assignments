/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  str= str.toLowerCase();
  let vowels = "aeiou";
  let count=0;
  for(let i=0;i<str.length;i++) if(vowels.indexOf(str.charAt(i))>=0) count++;
  return count;
}

module.exports = countVowels;