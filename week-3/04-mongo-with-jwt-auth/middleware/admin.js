const jwt = require('jsonwebtoken');
const {Admin} = require('../db');


// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ msg: "No token provided" });
    }

    const jwtToken = token.split(" ")[1]; // Assuming the token is sent in the format "Bearer <token>"

    try {
        const decodedValue = jwt.verify(jwtToken, process.env.JWTSECRET);
        console.log(decodedValue);
        if (decodedValue.username) {
           const admin = await Admin.findOne({username : decodedValue.username});
           if(!admin)
           {
            return res.status(403).json({msg : "User Not Found"});
           }
           req.user = admin;
           next();
        } else {
            res.status(403).json({ msg: "You are not authenticated" });
        }
    } catch (error) {
        res.status(401).json({ msg: "Invalid token", error });
    }
}

module.exports = adminMiddleware;
