import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { Authlogin } from "../services/auth.service";

const initialState = {
  isAuth: null,
  isLoading: false,
  userData: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      return {
        ...state,
        isAuth: action.payload.token,
        userData: action.payload.user,
      };
    },
    logout: (state, action) => {
      return {
        ...state,
        isAuth: null,
        userData: {},
      };
    },
  },
});

export const authSelector = () => useSelector((state) => state.auth);

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;

export const authLogin = createAsyncThunk(
  "auth/login",
  async ({ user_name, password }, thunkAPI) => {
    const res = await Authlogin({ user_name, password });
    thunkAPI.dispatch(login(res.data));
  },
);
