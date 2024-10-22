function main() {
    let counter = 1;
    setInterval(function () {
        console.log(counter);
        counter++;
    }, 1000);
}

main();