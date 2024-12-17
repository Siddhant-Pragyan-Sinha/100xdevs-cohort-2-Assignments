/*
## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.
*/
const fs = require('fs');

let data =" The file is written using fs write";
let filePath = './4-write-to-file.md';
fs.writeFile(filePath, data, (err,success) =>{
    if (err) {
        console.log(err);
    } else {
        console.log(success);
        console.log("written");
    }
});
console.log("writing");