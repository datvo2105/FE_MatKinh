import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { orderProduct } from "../services/order.service";

const initialState = {
  isLoading: false,
  order: {},
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    cartOrder: (state, action) => {
      return {
        ...state,
        order: action.payload,
      };
    },
  },
});

export default orderSlice.reducer;

export const { cartOrder } = orderSlice.actions;

export const addToCart = createAsyncThunk(
  "order/addToCart",
  async (order, thunkApi) => {
    const res = await orderProduct(order);
    thunkApi.dispatch(cartOrder(res.data));
  },
);
