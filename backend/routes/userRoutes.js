const express = require("express");
const router = express.Router();
const {
  verifyToken,
  verifyTokenAndAuthorization,
} = require("../middleware/authMiddleware");

const {
  registerUser,
  loginUser,
  updateUser,
} = require("../controllers/userController");

router.post("/", registerUser);
router.post("/login", loginUser);
router.put("/:id", verifyTokenAndAuthorization, updateUser);

module.exports = router;
