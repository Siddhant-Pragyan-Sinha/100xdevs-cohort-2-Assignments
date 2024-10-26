// Middleware for handling auth
const jwt = require("jsonwebtoken");
// const {"shahid_server" } = require("../index");
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const authToken = req.headers.authorization;
  const tokens = authToken.split(" ");
  //+ Split the tokens to remove Barer from auth token
  const token = tokens[1];

  const decodedValue = jwt.verify(token,"shahid_server");
  if (decodedValue) next();
  else res.status(403).json({ Msg: "Unauthorized Admin" });
}

module.exports = adminMiddleware;
