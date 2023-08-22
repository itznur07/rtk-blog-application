import { createAsyncThunk } from "@reduxjs/toolkit";

export const getBlogs = createAsyncThunk("blogs/getBlogs", async () => {
  const res = await fetch("http://localhost:9000/blogs");
  const data = await res.json();

  return data;
});
