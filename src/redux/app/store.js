import { configureStore } from "@reduxjs/toolkit";
import BlogsReducer from "../features/Blogs/BlogsSlice";

export const store = configureStore({
  reducer: {
    blogs: BlogsReducer,
  },
});
