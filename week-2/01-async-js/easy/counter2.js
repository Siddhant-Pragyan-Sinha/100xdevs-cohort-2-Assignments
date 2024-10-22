function main(fnc) {
    setTimeout(fnc, 1000);
}

let ctr = 1;
while (true) {
    main(function () {
        console.log(ctr);
        ctr++;
    });
}