/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) { 
  let arrayUsed=str.split('')
  //  We have taken the string as an input of arrays element by using split function
  let count=0;
  //  We are taking a variable to store the count of vowels
  const vowels=new Set(['a','e','i','o','u','A','E','I','O','U']);
  //  Declaring a Set of Vowels by this we dont need to compare again and again
  arrayUsed.forEach(element => {
    //  We are usng forEach function here on array by which we iterate/do a particular task for each elements in the array
    if(vowels.has(element)){
      //  Ckecking that the vowels has that particular element or not.We can use has with vowels as we defined vowels as a Set and .has function only works with Set
      count++;
      //  If Vowel is found then increasing the count
    }
  });
  return count;
  //  Returning Count
}

module.exports = countVowels;