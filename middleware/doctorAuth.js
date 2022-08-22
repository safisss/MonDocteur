const jwt = require("jsonwebtoken");
require("dotenv").config();
const isAuth = async (req, res, next) => {
  const token = req.header("jwt");
  // console.log(token);
  try {
    if (!token) {
      return res
        .status(401)
        .json({ message: "Access denied. No token provided." });
    }

    const decoded = jwt.verify(token, process.env.privateKey);
    req.doctor = decoded.doctor;
    next();
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Invalid token" });
  }
};

module.exports = isAuth;
