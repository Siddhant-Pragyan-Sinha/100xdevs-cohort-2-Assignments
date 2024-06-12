/*
  Implement a function `isPalindrome` which takes a string as argument and 
  returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a 
  palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  
  str = str.toLowerCase();

  str = str.replace(/[^a-z0-9]/g, '');

  if(str === '' || str.length === 1){
    return true;
  }

  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
