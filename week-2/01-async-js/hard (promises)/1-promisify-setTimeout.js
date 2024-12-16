/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

const wait = (n) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res();
        }, 1000 * n);
    });
};

module.exports = wait;
