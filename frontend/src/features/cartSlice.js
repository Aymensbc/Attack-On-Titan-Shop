import { createSlice } from "@reduxjs/toolkit";

//Fetch cart from Local storage
const cart = JSON.parse(localStorage.getItem("cart"));

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: cart ? cart.products : [],
    quantity: cart ? cart.quantity : 0,
    totalPrice: cart ? cart.totalPrice : 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1; //cart quantity number
      state.products.push(action.payload);
      state.totalPrice += action.payload.price * action.payload.quantity;
    },
    resetCart: (state) => {
      state.products = [];
      state.quantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addProduct, resetCart } = cartSlice.actions;
export default cartSlice.reducer;
