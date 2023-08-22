import { createSlice } from "@reduxjs/toolkit";
import { getRelatedBlogs } from "../../api/RelatedBlogsThunk/relatedBlogsApi";

const initialState = {
  isLoading: false,
  isError: false,
  error: "",
  data: [],
};

const relatedBlogsSlice = createSlice({
  name: "relatedBlogs",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getRelatedBlogs.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });

    builder.addCase(getRelatedBlogs.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.error = "";
      state.data = action.payload;
    });

    builder.addCase(getRelatedBlogs.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
      state.data = [];
    });
  },
});

export default relatedBlogsSlice.reducer;
