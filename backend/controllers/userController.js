const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");

// @desc    Register a User
// @route   POST api/users
//@access   Public
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  //if any of the fields are missing
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("Please enter all fields");
  }

  //if User already exists
  const userExists = await User.findOne({ username });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //create new user
  const newUser = await User.create({
    username,
    email,
    password: hashedPassword,
  });

  //If user has been created then send response
  if (newUser) {
    res.status(201);
    res.json({
      _id: newUser.id,
      username: newUser.username,
      email: newUser.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid User data");
  }
});

module.exports = { registerUser };
