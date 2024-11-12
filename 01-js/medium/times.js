/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    let sum = 0;
    for(let i=1; i<=n; i++)
        {
            sum += i;
        }

        return sum;
}

const startTime = performance.now();
// calculateTime(100); //it takes -0.1337... time to run this code
// calculateTime(100000);   // It takes -4.1076... time to run this code
calculateTime(1000000000);   // It takes -2809.987499999.. time to run this code
const endTime = performance.now();

const executionTime = startTime - endTime;

console.log("Execution Time : ", executionTime, " Milliseconds");


