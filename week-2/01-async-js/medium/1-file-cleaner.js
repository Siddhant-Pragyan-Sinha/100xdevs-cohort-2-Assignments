const fs = require("fs");

const cleanFile = async() => {
    // read a file
    fs.readFile("1_file.txt", { encoding: "utf-8" }, (err, data) => {
        if (err) {
            return console.log("error while reading the file", err);
        }
        // data without space
        const newData = data.toString().trim().replace(/\s+/g, " ");

        console.log(newData);

        // write a file
        fs.writeFile("1_file.txt", newData, err => {
            if (err) {
                console.log("error while writing to the file", err);
            } else {
                console.log("File cleaned successfully");
            }
        });
    });
};

cleanFile();
