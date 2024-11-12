//Creating a counter in javascript

let intInterval = 0;
let count = 0;

function time() {
  intInterval = setInterval(() => {
    count++;
    console.log(count);
  }, 1000);
}

time();
