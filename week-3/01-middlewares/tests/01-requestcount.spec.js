// const app = require("../01-requestcount");

// const request = require('supertest');
// const assert = require('assert');
// describe('GET /user', function() {
//   it('One request responds with 1', function(done) {
//     request(app)
//       .get('/requestCount')
//       .then(response => {
//         expect(response.body.requestCount).toBe(1);
//         done();
//       })
//   });

//   it('10 more requests log 12', function(done) {
//           for (let i = 0; i<10; i++) {
//             request(app)
//                   .get('/user')
//                   .then();
//           }
//           request(app)
//               .get('/requestCount')
//               .then(response => {
//                 expect(response.body.requestCount).toBe(12);
//                 done();
//               })
//       });
// });




const express = require('express');
const app = express();
const PORT = 3000;

// Initialize global variables
let requestCount = 0;
let totalTime = 0;

// Global middleware to count requests and calculate average time
app.use((req, res, next) => {
    const startTime = Date.now(); // Capture the start time

    res.on('finish', () => {
        const duration = Date.now() - startTime; // Calculate duration
        requestCount++; // Increment the request count
        totalTime += duration; // Add duration to total time
        console.log(`Request Count: ${requestCount}, Duration: ${duration}ms`);
    });

    next(); // Pass control to the next middleware or route handler
});

// Example endpoints
app.get('/', (req, res) => {
    setTimeout(() => { // Simulating a delay
        res.send('Hello, World!');
    }, Math.random() * 1000); // Random delay up to 1 second
});

app.get('/about', (req, res) => {
    setTimeout(() => { // Simulating a delay
        res.send('About Page');
    }, Math.random() * 1000); // Random delay up to 1 second
});

// Endpoint to get the current request count and average time
app.get('/stats', (req, res) => {
    const averageTime = requestCount === 0 ? 0 : totalTime / requestCount;
    res.send(`Total requests made: ${requestCount}, Average time: ${averageTime.toFixed(2)}ms`);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});



