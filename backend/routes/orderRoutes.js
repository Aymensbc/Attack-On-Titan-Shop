const express = require("express");
const router = express.Router();

const {
  createOrder,
  getUserOrders,
  getAllOrders,
} = require("../controllers/orderController");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../middleware/authMiddleware");

router.post("/", verifyToken, createOrder);
router.get("/:id", verifyTokenAndAuthorization, getUserOrders);
router.get("/", verifyTokenAndAdmin, getAllOrders);

module.exports = router;
