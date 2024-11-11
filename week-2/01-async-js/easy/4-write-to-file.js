// Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.
const fs = require('fs');
const prompt = require('prompt-sync')();
let dataToBeWrriten=prompt("Enter the data you want to write:");
fs.writeFile('read.txt',dataToBeWrriten,function(err){
    console.log("Sucessful!");
})