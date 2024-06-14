/*
## Counter without setInterval

Without using setInterval, try to code a counter in Javascript.
*/
let count = 30;
function counter() {
   
    if (count > 0) {
        console.log(count);
        count--;
        setTimeout(counter,1000);
    } else {
        console.log("count down finished !!!");
    }
}

counter();
