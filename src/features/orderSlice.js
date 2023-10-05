import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  deleteProduct,
  getAllOrder,
  orderProduct,
  updateOrder,
} from "../services/order.service";
import { useSelector } from "react-redux";

const initialState = {
  isLoading: false,
  orders: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    cartOrder: (state, action) => {
      return {
        ...state,
        orders: action.payload,
      };
    },
  },
});

export const selectorOrder = () => useSelector((state) => state.order);

export default orderSlice.reducer;

export const { cartOrder } = orderSlice.actions;

export const addToCart = createAsyncThunk(
  "order/addToCart",
  async (order, thunkApi) => {
    await orderProduct(order);
    thunkApi.dispatch(getOrders());
  },
);

export const deleteOutCart = createAsyncThunk(
  "order/deleteOutCart",
  async (id, thunkApi) => {
    await deleteProduct(id);
    thunkApi.dispatch(getOrders());
  },
);

export const updateToOrder = createAsyncThunk(
  "order/updateToOrder",
  async (body, thunkApi) => {
    const { id, order } = body;
    await updateOrder(id, order);
    thunkApi.dispatch(getOrders());
  },
);

export const getOrders = createAsyncThunk(
  "order/getAllOrder",
  async (body, thunkApi) => {
    const res = await getAllOrder();
    thunkApi.dispatch(
      cartOrder(
        res.data.filter((order) => order.status.toLowerCase() === "cart"),
      ),
    );
  },
);
