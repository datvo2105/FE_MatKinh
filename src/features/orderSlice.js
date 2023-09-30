import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  order: {},
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    cartOrder: () => {},
  },
});

export default orderSlice.reducer;

export const { order } = orderSlice.actions;
