import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { Authlogin } from "../services/auth.service";
import { updateProfile } from "../services/user.service";

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
    logout: (state) => {
      return {
        ...state,
        isAuth: null,
        userData: {},
      };
    },
    update: (state, action) => {
      return {
        ...state,
        userData: {
          ...state.userData,
          address: action.payload.address,
          email: action.payload.email,
        },
      };
    },
  },
});

export const authSelector = () => useSelector((state) => state.auth);

export const { login, logout, update } = authSlice.actions;

export default authSlice.reducer;

export const authLogin = createAsyncThunk(
  "auth/login",
  async ({ user_name, password }, thunkAPI) => {
    const res = await Authlogin({ user_name, password });
    thunkAPI.dispatch(login(res.data));
  },
);

export const updateUserProfile = createAsyncThunk(
  "auth/update",
  async ({ address, email }, thunkAPI) => {
    await updateProfile({ address, email });
    thunkAPI.dispatch(update({ address, email }));
  },
);
