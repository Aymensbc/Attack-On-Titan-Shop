import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./features/sidebarSlice";
import adminReducer from "./features/adminSlice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    admin: adminReducer,
  },
});
