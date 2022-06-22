import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    sidebarShow: true,
    unfoldable: false,
  },
  reducers: {
    changeSidebarShow: (state) => {
      state.sidebarShow = !state.sidebarShow;
    },
    changeUnfoldable: (state) => {
      state.unfoldable = !state.unfoldable;
    },
  },
});

export const { changeSidebarShow, changeUnfoldable } = sidebarSlice.actions;
export default sidebarSlice.reducer;
