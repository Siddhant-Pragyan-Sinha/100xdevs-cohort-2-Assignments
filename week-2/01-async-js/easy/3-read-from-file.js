const fs = require("fs");

const readAFile = () => {
    fs.readFile("3_file.txt", { encoding: "utf-8"}, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log("content from file: ------>");
            console.log(data);
            console.log("<------ content end!");
        }
    })
};

readAFile();
