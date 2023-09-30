import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllProduct, filterByCategory } from "../services/product.service";
import { useSelector } from "react-redux";

const initialState = {
  isLoading: false,
  listProduct: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProducts: (state, action) => {
      return {
        ...state,
        listProduct: action.payload,
      };
    },
    filterCategory: (state, action) => {
      return {
        ...state,
        listProduct: action.payload,
      };
    },
  },
});

export const { filterCategory, getProducts } = productSlice.actions;
export default productSlice.reducer;

export const selectorProduct = () => useSelector((state) => state.product);

export const setListProducts = createAsyncThunk(
  "product/showProducts",
  async ({ params }, thunkAPI) => {
    const data = await getAllProduct({ params }).then((res) => res?.record);
    thunkAPI.dispatch(getProducts(data));
  },
);

export const filterCategoryById = createAsyncThunk(
  "product/filterCategory",
  async (query, thunkAPI) => {
    const data = await filterByCategory(query).then((res) => res?.record);
    thunkAPI.dispatch(filterCategory(data));
  },
);
