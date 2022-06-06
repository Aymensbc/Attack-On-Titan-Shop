const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

const {
  registerUser,
  loginUser,
  updateUser,
} = require("../controllers/userController");

router.post("/", registerUser);
router.post("/login", loginUser);
router.put("/:id", protect, updateUser);

module.exports = router;
