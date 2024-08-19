//## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.
const fs=require('fs')
fs.readFile("a.txt","Here you are at Week 2!!!",function(err,data){
    if(err){
        console.error("Error writing this file",err);
    }else{
        console.log("File encoded");
    }
})
