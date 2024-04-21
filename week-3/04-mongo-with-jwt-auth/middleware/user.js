const jwt = require('jsonwebtoken');
const {JWT_SECRET}  = require('../config');

function userMiddleware(req, res, next) {
    const token = req.headers.authorization;    
    const authWOrds = token.split(" ");

    const jwtToken = authWOrds[1]; 

    const decoded = jwt.verify(jwtToken, JWT_SECRET);

    if (decoded.username) {
        req.username = decoded.username;
        next();
    } else {
        res.status(403).json({
            message: "Unauthenticated"
        })  
    }
}

module.exports = userMiddleware;
