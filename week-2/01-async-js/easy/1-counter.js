const counter = () => {
    let i = 0;
    const interval = setInterval(() => {
        console.log(++i);
        if (i === 20) {
            console.log("Done!");
            clearInterval(interval);
        }
    }, 1000);
}

counter();
