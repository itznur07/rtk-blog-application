import { createAsyncThunk } from "@reduxjs/toolkit";

export const getBlog = createAsyncThunk("blog/getBlog", async (id) => {
  const res = await fetch(`http://localhost:9000/blogs/${id}`);
  const data = await res.json();

  return data;
});
