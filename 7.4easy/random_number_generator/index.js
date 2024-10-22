const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());

// Random Number Generator Route
app.get('/random', (req, res) => {
    const min = parseInt(req.query.min) || 1;
    const max = parseInt(req.query.max) || 100;
    
    if (min >= max) {
        return res.status(400).json({ error: "Min should be less than Max" });
    }

    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    
    res.json({ randomNumber });
});

// Root route (optional)
app.get('/', (req, res) => {
    res.send('Welcome to the Random Number Generator API!');
});

// Start server
app.listen(port, () => {
    console.log(`Random number generator API listening at http://localhost:${port}`);
});
