import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "../services/userService";

//Get the user from the local storage
const user = JSON.parse(localStorage.getItem("user"));

//Login User
export const login = createAsyncThunk("user/login", async (user, thunkAPI) => {
  try {
    return await userService.login(user);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const logout = createAsyncThunk("user/logout", async () => {
  await userService.logout();
});

export const register = createAsyncThunk(
  "user/register",
  async (user, thunkAPI) => {
    try {
      return await userService.register(user);
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

export const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: user ? user : null,
    isSuccess: false,
    error: false,
    isLoading: false,
    message: "",
  },
  reducers: {
    reset: (state) => {
      state.error = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = "";
      state.currentUser = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = true;
        state.isLoading = false;
        state.message = action.payload;
        state.isSuccess = false;
        state.currentUser = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.error = false;
        state.isSuccess = true;
        state.isLoading = false;
        state.currentUser = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.currentUser = null;
      })
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.error = true;
        state.isLoading = false;
        state.message = action.payload;
        state.isSuccess = false;
        state.currentUser = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.error = false;
        state.isSuccess = true;
        state.isLoading = false;
        state.currentUser = action.payload;
      });
  },
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;
