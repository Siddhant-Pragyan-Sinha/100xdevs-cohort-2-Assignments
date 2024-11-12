const jwt = require('jsonwebtoken');
const { User } = require('../db');

async function userMiddleware(req, res, next) {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ msg: "No Token has been provided" });
    }

    const jwtToken = token.split(" ")[1];
    try {
        const decodedValue = jwt.verify(jwtToken, process.env.JWTSECRET);
        if (decodedValue.username) {
            // Fetch the user from the database
            const user = await User.findOne({ username: decodedValue.username });
            if (!user) {
                return res.status(403).json({ msg: "User not found" });
            }
            req.user = user; // Set the entire user object
            next();
        } else {
            res.status(403).json({ msg: "You are not authenticated" });
        }
    } catch (error) {
        res.status(401).json({ msg: "Invalid Token", error });
    }
}

module.exports = userMiddleware;
