const jwt = require("jsonwebtoken");
const jwtPassword = 'secret123';

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const auth = req.headers.authorization;
    const token = auth.split(' ')[1];
    const user = jwt.verify(token, jwtPassword);
    if(user){
        next();
    }else{
        res.sendStatus(404);
    }
}

module.exports = userMiddleware;