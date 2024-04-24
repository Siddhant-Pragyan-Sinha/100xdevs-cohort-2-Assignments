/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
   str1=str1.toLowerCase();
    str2=str2.toLowerCase();
    if(str1.length> str2.length)
       return isAnagram(str2,str1)
   else
   {
      let set1= new Set();
    for(let i=0;i<str1.length;i++)
    {
       set1.add(str1[i])
    }
    let l=set1.size
    for(let i=0;i<str2.length;i++)
    {
       set1.add(str2[i])
    }
    if(set1.size != l)
      return false
    return true
   }

}

module.exports = isAnagram;
