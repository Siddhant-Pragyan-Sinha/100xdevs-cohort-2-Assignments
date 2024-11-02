/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    const normal1 = str1.toLowerCase();
    const normal2 = str2.toLowerCase();

    if(normal1.length !== normal2.length){
      return false;
    }

    const sorted1 = normal1.split("").sort().join("");
    const sorted2 =  normal2.split("").sort().join("");
    
    return sorted1 === sorted2;

}

module.exports = isAnagram;
