//Here we're creating the counter but without the help of setInterval

let count = 0;
let isCounting = false;

function startCounter() {
  isCounting = true;
  function incrementCounter() {
    if (isCounting) {
      count++;
      console.log(count);
    }

    setTimeout(() => {
      incrementCounter();
    }, 1000);
  }

  incrementCounter();
}

startCounter();
