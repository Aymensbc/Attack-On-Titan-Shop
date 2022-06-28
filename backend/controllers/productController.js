const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");

// @desc    Create a product
// @route   POST api/product
// @access   private
const createProduct = asyncHandler(async (req, res) => {
  console.log(req.file);
  const { title, desc, category, color, size, price } = req.body;
  if (!title || !desc || !category || !color || !size || !price) {
    res.status(400);
    throw new Error("Please enter all fields");
  }

  const newProduct = await Product.create({
    title,
    category,
    desc,
    color,
    size,
    price,
  });

  if (newProduct) {
    res.status(201);
    res.json(newProduct);
  } else {
    res.status(400);
    throw new Error("Invalid data");
  }
});

// @desc    Update a product
// @route   POST api/product/:id
// @access   private
const updateProduct = asyncHandler(async (req, res) => {
  const productexists = await Product.findById(req.params.id);

  if (!productexists) {
    res.status(400);
    throw new Error("Product not found");
  }

  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(product);
});

// @desc    Delete a product
// @route   DELETE api/product/:id
// @access   private
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(400);
    throw new Error("Product not found");
  }

  res.status(200).json(product);
  product.remove();
});

// @desc    Get a product
// @route   GET api/product/:id
// @access   public (Any body can see products)
const getProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(400);
    throw new Error("Product not found");
  }

  res.status(200).json(product);
});

// @desc    Get all products
// @route   GET api/product/
// @access   public (Any body can see products)
//Here we can have 2 queries , not only new products but also fetching producst by category
const getAllProducts = asyncHandler(async (req, res) => {
  const queryNew = req.query.new;
  const queryCategory = req.query.category;

  let products;

  if (queryNew) {
    products = await Product.find().sort({ createdAt: -1 }).limit(5);
  } else if (queryCategory) {
    products = await Product.find({
      category: {
        $in: [queryCategory],
      },
    });
  } else {
    products = await Product.find();
  }

  res.status(200).json(products);
});

module.exports = {
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
  getAllProducts,
};
