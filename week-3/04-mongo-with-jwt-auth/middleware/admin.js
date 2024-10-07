// Middleware for handling auth
const {JWT_SECRET} = require("../config")
const jwt = require("jsonwebtoken")


function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    const word = token.split(" ");
    const jwtToken = word[1];
    try{
        const decodedValue = jwt.verify(jwtToken, JWT_SECRET);
        if (decodedValue.username){
            next();
        }else{
            res.json({
                message: "You are not authenticated"
            })
        }
    } catch(e){
        res.json({
            message: "wrong inputss"
        })
    }
}

module.exports = adminMiddleware;