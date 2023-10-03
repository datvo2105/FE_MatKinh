import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllProduct, filterByCategory } from "../services/product.service";
import { useSelector } from "react-redux";

const initialState = {
  isLoading: false,
  newData: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProducts: (state, action) => {
      return {
        ...state,
        newData: action.payload,
      };
    },
  },
});

export const { getProducts } = productSlice.actions;
export default productSlice.reducer;

export const selectorProduct = () => useSelector((state) => state.product);

export const setListProducts = createAsyncThunk(
  "product/showProducts",
  async ({ pageIndex, search }, thunkAPI) => {
    const res = await getAllProduct({ pageIndex, search });
    thunkAPI.dispatch(getProducts(res.data));
  },
);
