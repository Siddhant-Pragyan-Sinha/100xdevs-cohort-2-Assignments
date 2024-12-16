/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/



function isAnagram(str1, str2) {
  // Step 1: Normalize the strings (convert to lowercase and remove any whitespace)
  str1 = str1.replace(/\s+/g, '').toLowerCase();
  str2 = str2.replace(/\s+/g, '').toLowerCase();

  // Step 2: Check if the lengths are different; if so, they cannot be anagrams
  if (str1.length !== str2.length) {
    return false;
  }

  // Step 3: Sort the characters in each string and compare them
  const sortedStr1 = str1.split('').sort().join('');
  const sortedStr2 = str2.split('').sort().join('');

  // Return true if sorted strings are equal, otherwise false
  return sortedStr1 === sortedStr2;
}

// Test cases
console.log(isAnagram("spar", "rasp"));                // true
console.log(isAnagram("Listen", "Silent"));            // true
console.log(isAnagram("hello", "world"));              // false
console.log(isAnagram("The Eyes", "They See"));        // true
console.log(isAnagram("a gentleman", "elegant man"));  // true

module.exports = isAnagram;







// // Alternative Approach: Using Frequency Count (Improves Performance)

// function isAnagram(str1, str2) {
//   str1 = str1.replace(/\s+/g, '').toLowerCase();
//   str2 = str2.replace(/\s+/g, '').toLowerCase();

//   if (str1.length !== str2.length) {
//     return false;
//   }

//   const count = {};

//   // Count the frequency of each character in str1
//   for (let char of str1) {
//     count[char] = (count[char] || 0) + 1;
//   }

//   // Subtract the frequency using characters in str2
//   for (let char of str2) {
//     if (!count[char]) {
//       return false;
//     }
//     count[char]--;
//   }

//   return true;
// }

// console.log(isAnagram("spar", "rasp"));                // true
// console.log(isAnagram("Listen", "Silent"));            // true
// console.log(isAnagram("hello", "world"));              // false
// console.log(isAnagram("The Eyes", "They See"));        // true
// console.log(isAnagram("a gentleman", "elegant man"));  // true

// module.exports = isAnagram;
