## Create a counter in JavaScript

// Set an interval to call the updateCounter function every second (1000 milliseconds)
setInterval(updateCounter, 1000);

let cnt =0;   // initalize
function updateCounter(){  
console.log(cnt);
cnt++;
}

We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
It should go up as time goes by in intervals of 1 second
