const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const verifyToken = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      res.status(401);
      throw new Error("Token is not valid ");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("Not Authorized , No Token ");
  }
});

const verifyTokenAndAuthorization = async (req, res, next) => {
  verifyToken(req, res, async () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not allowed");
    }
  });
};

module.exports = { verifyToken, verifyTokenAndAuthorization };
