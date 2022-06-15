const mongoose = require("mongoose");

const cartSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    products: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
        quantity: {
          type: Number,
          default: 1,
        },
        price: {
          type: Number,
        },
        color: {
          type: String,
        },
        size: {
          type: String,
        },
        img: { type: String },
        title: { type: String },
        desc: { type: String },
      },
    ],
    cartQuantity: {
      type: Number,
      default: 0,
    },
    totalPrice: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Cart", cartSchema);
