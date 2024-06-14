/*
Write code to read contents of a file and print it to the console. 
You can use the fs library to as a black box, the goal is to understand async tasks. 
Try to do an expensive operation below the file read and see how it affects the output. 
Make the expensive operation more and more expensive and see how it affects the output. 
*/
const fs = require('fs');
console.log("read from file");
let filePath = "./3-read-from-file.md";
fs.readFile(filePath,'utf-8',(err,data) => {
    if (err) {
        console.log(err);
    } else {
        console.log("data in the file is ");
        console.log(data);
    }
});

console.log("calc sum");

let sum = 0;
let n = 100000000;
 for (let i = 0; i < n; i++) {
    sum += i;
 }
 console.log(sum);
 console.log("everything done");

  