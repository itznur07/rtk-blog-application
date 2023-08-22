import { createSlice } from "@reduxjs/toolkit";
import { getBlog } from "../../api/BlogThunk/blogApi";

const initialState = {
  isLoading: false,
  isError: false,
  error: "",
  data: [],
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getBlog.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });

    builder.addCase(getBlog.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.error = "";
      state.data = action.payload;
    });

    builder.addCase(getBlog.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
      state.data = [];
    });
  },
});

export default blogSlice.reducer;
