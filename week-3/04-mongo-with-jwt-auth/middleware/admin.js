// Middleware for handling auth
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../constants"); 
function adminMiddleware(req, res, next) {
    const authorization = req.headers.authorization;
    const token = authorization.split(" ");
    const jwtToken = token[1];
    try {
        const decodedToken = jwt.verify(jwtToken, JWT_SECRET);
        if (decodedToken.username) {
            next();
        } else {
            res.status(403).json({
                message: "Admin with this username is not authorized."
            })
        }
    } catch (err) {
        res.json({
            message: err
        });
    }

    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
}

module.exports = adminMiddleware;