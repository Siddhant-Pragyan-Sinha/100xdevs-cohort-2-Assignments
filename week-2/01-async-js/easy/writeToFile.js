const fileHandler = require('fs');


//To Write something insdie the file 

async function writeTofile() 
{
    await fileHandler.writeFile('test.txt', 'This data is written by Node-js', (err) => {
        if(err)
            {
                console.log(err);
            }
            else 
            {
                console.log("Expensive Operation gonna start");
                expensiveOperation();
                console.log("Expensive Operation Done");
                console.log("Data Written Successfully");
            }
    })
}


//To Read something from the file
 async function readFile()
 {
    await fileHandler.readFile('test.txt', 'utf8', (err, data) => 
        {
            if(err)
                {
                    console.log(err);
                }
                else 
                {
                    console.log(data);
                }
        })
 }

 async function expensiveOperation()
 {
    let sum = 0;
    for(let i=1; i<=10; i++)
        {
            sum+=i;
        }

        console.log("Total sum of : ", sum);
 }
writeTofile();
readFile();
