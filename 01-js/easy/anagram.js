/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  return str1.toLowerCase().split('').sort().join('')===str2.toLowerCase().split('').sort().join('')
  //  We compared two strings after using some functions on them.
  //  toLowerCase() it is used to convert all the elements of the string to lower case.
  //  split('') it is used to split every element of the string.
  //  sort() it is used to sort the splited elements of the string.
  //  join('') it is used to join the sorted elements of the string.
  }

module.exports = isAnagram;
