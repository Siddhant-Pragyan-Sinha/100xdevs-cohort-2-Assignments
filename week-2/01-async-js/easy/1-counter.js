/*
## Create a counter in JavaScript

We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
It should go up as time goes by in intervals of 1 second
*/
function counter() {
  let count = 30;
  console.log(count);
  const interval = setInterval(() =>{
    count--;
    console.log(count);
    if (count == 0){
        clearInterval(interval);
        console.log("CountDown Finished");
    }
  },1000);
    
}
counter();