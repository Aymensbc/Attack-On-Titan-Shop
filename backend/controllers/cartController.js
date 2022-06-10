const asyncHandler = require("express-async-handler");
const Cart = require("../models/cartModel");

// @desc    Create a cart
// @route   POST api/cart
// @access   private
//any user can craete a new cart
const createCart = asyncHandler(async (req, res) => {
  const { productId, quantity } = req.body;
  let cart;

  if (!productId && !quantity) {
    throw new Error("Plz enter amount and product ID");
  }

  cart = await Cart.findOne({ userId: req.user.id });
  //if there is no cart
  if (!cart) {
    cart = await Cart.create({
      userId: req.user.id,
      products: req.body,
    });
    return res.status(200).json(cart);
  } else {
    //Check if product exists
    const itemIndex = cart.products.findIndex((p) => p.productId == productId);

    if (itemIndex > -1) {
      //product exists so update quantity
      let product = cart.products[itemIndex];
      product.quantity = product.quantity + quantity;
      cart.products[itemIndex] = product;
    } else {
      //Product doesnt exist so add new product in products array
      cart.products.push({ productId, quantity });
    }
    cart = await cart.save();
    return res.status(201).json(cart);
  }
});

// @desc    Delete a product from cart
// @route   Delete api/cart/:id
// @access  private
const deleteFromCart = asyncHandler(async (req, res) => {
  const productId = req.params.id;
  const cart = await Cart.findOne({ userId: req.user.id });
  if (cart.products.length > 0) {
    const product = await Cart.findOneAndUpdate(
      { userId: req.user.id },
      {
        $pull: { products: { productId: productId } },
      }
    );
    res.status(200).json(product);
  } else {
    throw new Error("Cart is empty");
  }
});

// @desc    Get user cart
// @route   GET api/cart/
// @access  private
const getCart = asyncHandler(async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user.id });
  if (cart) {
    res.status(200).json(cart);
  } else {
    res.status(400);
    throw new Error("Your cart is empty");
  }
});

// @desc    Get all carts
// @route   GET api/cart/
// @access  private
const getAllCarts = asyncHandler(async (req, res) => {
  const carts = await Cart.find();
  if (carts) {
    res.status(200).json(carts);
  } else {
    res.status(500);
    throw new Error("No carts found");
  }
});

module.exports = { createCart, deleteFromCart, getCart, getAllCarts };
