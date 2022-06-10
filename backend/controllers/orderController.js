const asyncHandler = require("express-async-handler");
const Order = require("../models/orderModel");

// @desc    Create an Order
// @route   POST api/order
// @access  private
const createOrder = asyncHandler(async (req, res) => {
  const { products, amount, address, status } = req.body;

  if (!products || !amount || !address) {
    res.status(400);
    throw new Error("Details missing to put an order");
  }

  const order = await Order.create({
    userId: req.user.id,
    products,
    amount,
    address,
    status,
  });
  res.status(200).json(order);
});

// @desc    Get User Orders
// @route   GET api/order/:id
// @access  private
const getUserOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ userId: req.user.id });
  res.status(200).json(orders);
});

// @desc    Get All Orders
// @route   GET api/order/
// @access  private , only Admin
const getAllOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find();
  res.status(200), json(orders);
});

// @desc    Get Monthly Income
// @route   GET api/order/income
// @access  private , only Admin
const getMonthlyIncome = asyncHandler(async (req, res) => {
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

  const income = await Order.aggregate([
    { $match: { createdAt: { $gte: previousMonth } } },
    {
      $project: {
        month: { month: "$createdAt" },
        sales: "$amount",
      },
    },
    {
      $group: {
        _id: "$month",
        total: { $sum: "$sales" },
      },
    },
  ]);
  res.status(200).json(income);
});

module.exports = { createOrder, getUserOrders, getAllOrders };
