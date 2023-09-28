import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  categoryId: "",
};

const productSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterCategory: () => {},
  },
});

export const { filterCategory } = productSlice.actions;

export default productSlice.reducer;
