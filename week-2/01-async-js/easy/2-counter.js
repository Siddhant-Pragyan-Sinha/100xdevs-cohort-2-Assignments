let timeoutId = null;
let i = 0;
const counter = () => {
    console.log(++i);

    if (i === 20) {
        console.log("Done!");
        return;
    }

    timeoutId = setTimeout(counter, 1000);
};

counter();
