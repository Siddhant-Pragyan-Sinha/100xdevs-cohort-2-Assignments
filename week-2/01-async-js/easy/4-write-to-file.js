const fs = require("fs");

const writeToFile = () => {
    fs.writeFile("4_file.txt", "this is from js file", err => {
        console.log(err);
    });
};

writeToFile();
