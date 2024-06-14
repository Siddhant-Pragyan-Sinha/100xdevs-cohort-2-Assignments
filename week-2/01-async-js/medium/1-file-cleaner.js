const fs = require('fs');

function removeSpace(data) {
    const file_data = data.replace(/\s+/g, " ");
    return file_data;
}
let newData;
fs.readFile('./sample.txt','utf-8',(err,data) => {
    if (err) {
        console.log(err);
    } else {
        newData =  removeSpace(data);
        console.log("newdata is ");
        console.log(newData);
        fs.writeFile('./sample.txt',newData,(err,success) => {
            if (err) {
                console.log(err);
            } else {
                console.log("file Formatted");
            }
        });
    }
});
