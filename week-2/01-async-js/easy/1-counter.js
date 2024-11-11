// Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second

var counter=0;
//  Initilized a variable named counter equal to 0
function updateCounter(){
    //  Created a function named updateCounter to update the counter
    console.log(counter)
    //  Loged counter 
    counter++
    //  Incremented the counter after loging
}
setInterval(updateCounter,1000)
//  Set a interval using setInterval function which calls updateCounter after every 1 second