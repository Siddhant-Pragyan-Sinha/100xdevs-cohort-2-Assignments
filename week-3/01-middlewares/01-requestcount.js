const express = require('express');
const app = express();
const PORT = 3000;

// Initialize a global request count variable
let requestCount = 0;

// Global middleware to count requests
app.use((req, res, next) => {
    requestCount++; // Increment the request count
    console.log(`Request Count: ${requestCount}`); // Log the current count
    next(); // Pass control to the next middleware or route handler
});

// Example endpoints
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

// Endpoint to get the current request count
app.get('/request-count', (req, res) => {
    res.send(`Total requests made: ${requestCount}`);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});



// const request = require('supertest');
// const assert = require('assert');
// const express = require('express');

// const app = express();
// let requestCount = 0;

// // You have been given an express server which has a few endpoints.
// // Your task is to create a global middleware (app.use) which will
// // maintain a count of the number of requests made to the server in the global
// // requestCount variable

// app.get('/user', function(req, res) {
//   res.status(200).json({ name: 'john' });
// });

// app.post('/user', function(req, res) {
//   res.status(200).json({ msg: 'created dummy user' });
// });

// app.get('/requestCount', function(req, res) {
//   res.status(200).json({ requestCount });
// });

// module.exports = app;
