import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import cartService from "../services/cartService";

//Fetch cart from Local storage
const cart = JSON.parse(localStorage.getItem("cart"));

//get User's cart
export const getUserCart = createAsyncThunk(
  "cart/getUsercart",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().user.currentUser.token;
      return await cartService.getUserCart(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (productData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().user.currentUser.token;
      return await cartService.addToCart(productData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const deleteFromCart = createAsyncThunk(
  "cart/deleteFromCart",
  async (productId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().user.currentUser.token;
      return await cartService.deleteFromCart(productId, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: cart ? cart : null,
    isSucess: false,
    error: false,
    message: "",
  },
  reducers: {
    resetCart: (state) => {
      state.cart = null;
      state.isSucess = false;
      state.message = "";
      state.error = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserCart.fulfilled, (state, action) => {
        state.isSucess = true;
        state.error = false;
        state.cart = action.payload;
      })
      .addCase(getUserCart.rejected, (state, action) => {
        state.cart = null;
        state.isSucess = false;
        state.error = true;
        state.message = action.payload;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.isSucess = true;
        state.error = false;
        state.cart = action.payload;
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.cart = null;
        state.isSucess = false;
        state.error = true;
        state.message = action.payload;
      })
      .addCase(deleteFromCart.fulfilled, (state, action) => {
        state.isSucess = true;
        state.error = false;
        state.cart = action.payload;
      })
      .addCase(deleteFromCart.rejected, (state, action) => {
        state.cart = null;
        state.isSucess = false;
        state.error = true;
        state.message = action.payload;
      });
  },
});

export const { resetCart } = cartSlice.actions;
export default cartSlice.reducer;
