import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "../features/Blog/blogSlice";
import blogsReducer from "../features/Blogs/blogsSlice";

export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    blog: blogReducer,
  },
});
