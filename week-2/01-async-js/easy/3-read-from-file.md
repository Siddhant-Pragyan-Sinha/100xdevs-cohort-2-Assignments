## Reading the contents of a file

Write code to read contents of a file and print it to the console. 
You can use the fs library to as a black box, the goal is to understand async tasks. 
Try to do an expensive operation below the file read and see how it affects the output. 
Make the expensive operation more and more expensive and see how it affects the output. 

const fs = require('fs');

// Function to read the contents of a file
function readFile() {
    console.log('Reading file...');
    
    fs.readFile('example.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        console.log('File contents:', data);

        // Perform an expensive operation
        expensiveOperation();
    });
}


// Simulating an expensive operation
function expensiveOperation() {
    console.log('Starting expensive operation...');
    
    let total = 0;
    for (let i = 0; i < 1e9; i++) { // Change this value to make it more expensive
        total += i;
    }

    console.log('Finished expensive operation. Total:', total);
}

// Start reading the file
readFile();
