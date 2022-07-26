const express = require("express");
const router = express.Router();
const { uploadImage } = require("../middleware/imageMiddleware");
const multer = require('multer')
const upload = require("../productImages")
const upload = multer({dest:"../productImages"})

const {
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
  getAllProducts,
} = require("../controllers/productController");

const { verifyTokenAndAdmin } = require("../middleware/authMiddleware");

router.post("/", verifyTokenAndAdmin, createProduct);
router.put("/:id", verifyTokenAndAdmin, updateProduct);
router.delete("/:id", verifyTokenAndAdmin, deleteProduct);
router.get("/:id", getProduct);
router.get("/", getAllProducts);

module.exports = router;
