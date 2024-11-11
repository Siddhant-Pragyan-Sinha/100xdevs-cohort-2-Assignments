/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/
function isPalindrome(str) {
  str = str.toLowerCase().replace(/[\W_]/g, "");
  //  Converting the string to Lower Case and removing punctuation, spaces, and special characters. 
  let new_str = str.split("").reverse().join("");
  //  Creating a new string by reversing the previous string.
  if (new_str == str){
    return true
  };
  //  Comparing the reversed string and main string wether they are equal or not.If equal then return true
  return false
  //  If they are not equal then return false.
}

module.exports = isPalindrome;
