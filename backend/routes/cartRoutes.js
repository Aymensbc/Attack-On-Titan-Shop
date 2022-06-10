const express = require("express");
const router = express.Router();

const {
  createCart,
  deleteFromCart,
  getCart,
  getAllCarts,
} = require("../controllers/cartController");
const {
  verifyToken,
  verifyTokenAndAdmin,
} = require("../middleware/authMiddleware");

router.post("/", verifyToken, createCart);
router.delete("/:id", verifyToken, deleteFromCart);
router.get("/", verifyToken, getCart);
router.get("/all", verifyTokenAndAdmin, getAllCarts);

module.exports = router;
