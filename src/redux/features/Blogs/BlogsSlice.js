import { createSlice } from "@reduxjs/toolkit";
import { getBlogs } from "../../api/BlogsThunk/blogsApi";

const initialState = {
  isLoading: false,
  isError: false,
  error: "",
  data: [],
};

const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getBlogs.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });

    builder.addCase(getBlogs.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.error = "";
      state.data = action.payload;
    });

    builder.addCase(getBlogs.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
      state.data = [];
    });
  },
});

export default blogsSlice.reducer;
