/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let lo = 0,
    hi = str.length - 1;
  while (lo <= hi) {
    while (
      str[lo] == " " ||
      str[lo] == "!" ||
      str[lo] == "." ||
      str[lo] == "?" ||
      str[lo] == ","
    )
      lo++;
    while (
      str[hi] == " " ||
      str[hi] == "!" ||
      str[hi] == "." ||
      str[hi] == "?" ||
      str[hi] == ","
    )
      hi--;
    if (str[lo].toLowerCase() != str[hi].toLowerCase()) return false;
    lo++;
    hi--;
  }
  return true;
}

module.exports = isPalindrome;
