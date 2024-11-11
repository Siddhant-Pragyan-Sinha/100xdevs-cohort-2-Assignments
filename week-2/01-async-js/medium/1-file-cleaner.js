// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require('fs');
fs.readFile("cleanerCheck.txt","utf-8",function(err,data){
    let str = data;
    str = str.trim().replace(/\s+/g,' ');
    fs.writeFile("cleanerCheck.txt",str,function(err){
        console.log("Cleaning is done!");
    });
});