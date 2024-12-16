/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

const wait1 = (t) => {
    return new Promise(res => {
        setTimeout(() => res(), t * 1000);
    });
};

const wait2 = (t) => {
    return new Promise(res => {
        setTimeout(() => res(), t * 1000);
    });
};

const wait3 = (t) => {
    return new Promise(res => {
        setTimeout(() => res(), t * 1000);
    });
};

const calculateTime = (t1, t2, t3) => {
    const start = Date.now();
    return Promise.all([
        wait1(t1),
        wait2(t2),
        wait3(t3)
    ]).then(() => {
        return Date.now() - start;
    });
};

module.exports = calculateTime;
