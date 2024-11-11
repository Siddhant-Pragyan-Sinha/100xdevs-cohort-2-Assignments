/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/
function calculateTime(n){
    //  Taking n as input in function calculateTime
    let start = new Date();
    //  Storing the date and time before running in a variable named start
    for (let i = 0; i < n; ++i) {}
    //  Running a for loop for n times.
    return (new Date() - start) / 1000;
    //  Calculating difference between time before running and after running.Then dividing it by 1000 to get result in seconds.Then returning it.
  }
