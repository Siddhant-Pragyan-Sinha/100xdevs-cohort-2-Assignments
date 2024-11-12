let str = "hello   my   name    is     rohit     kumar              ";

function fileCleaner(str) {
  
    //Here, We're gonna use Regular expression for removing the extra spaces from the given string

    return str.replace(/\s+/g,' ').trim();

  
}


let filecleaner = fileCleaner(str);

console.log(filecleaner);