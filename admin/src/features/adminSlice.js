import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import adminService from "../services/adminService";

const admin = JSON.parse(localStorage.getItem("admin"));

//Login Admin
export const login = createAsyncThunk(
  "admin/login",
  async (admin, thunkAPI) => {
    try {
      return await adminService.login(admin);
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

export const adminSlice = createSlice({
  name: "admin",
  initialState: {
    admin: admin ? admin : null,
    isSuccess: false,
    error: false,
    message: "",
  },
  reducers: {
    reset: (state) => {
      state.admin = null;
      state.error = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.rejected, (state, action) => {
        state.error = true;
        state.isSuccess = false;
        state.message = action.payload;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.error = false;
        state.isSuccess = true;
        state.admin = action.payload;
      });
  },
});

export const { reset } = adminSlice.actions;
export default adminSlice.reducer;
