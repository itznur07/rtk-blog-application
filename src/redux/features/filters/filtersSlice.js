import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "all",
  sort: "default",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    statusSelected: (state, action) => {
      state.state = action.payload;
    },
    sortChanged: (state, action) => {
      state.sort = action.payload;
    },
  },
});

export default filtersSlice.reducer;
export const { statusSelected, sortChanged } = filtersSlice.actions;
