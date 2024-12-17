const jwt = require("jsonwebtoken");
const secret = require("../index");
function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token = req.header.authorization;
    const words = token.split(" ");
    const jwttoken = words[1];
    const decodedvalue = jwt.verify(jwttoken,secret);
    if (decodedvalue.username) {
        req.username = decodedvalue.username;
        next();
    } else {
        res.status(403).json({
            msg : "You are not authenticated"
        })
    }
}

module.exports = userMiddleware;