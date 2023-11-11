const jwt = require("jsonwebtoken");
const User = require("../models/user");

const secretKey = process.env["JWT_SECRET_KEY"];

async function verifyToken(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ errors: ["Access denied"] });
  }

  const decodedToken = jwt.verify(token, secretKey, (err) => {
    if (err) {
      return res.status(403).json({ errors: ["Invalid token"] });
    }
  });

  const checkUser = await User.findById(decodedToken.id);
  if (!checkUser) return res.status(401).json({ errors: ["Unauthorised"] });

  req.user = decodedToken;
  next();
}

module.exports = verifyToken;
