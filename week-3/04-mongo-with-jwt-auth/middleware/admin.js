// Middleware for handling auth
const jwt = require('jsonwebtoken');
const { Admin } = require('../db');
const jwtPassword = "secret123";
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const auth = req.headers.authorization;
    const token = auth.split(' ')[1];
    try{
        const email = jwt.verify(token, jwtPassword);
        if(email){
            next();
        } else {
            res.sendStatus(404);
        }
    }
    catch{
        res.sendStatus(404);
    }
}

module.exports = adminMiddleware;