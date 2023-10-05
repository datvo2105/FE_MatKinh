import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  getStoredState,
} from "redux-persist";

import storage from "redux-persist/lib/storage";
import api from "../configs/config";

import authSlice from "../features/authSlice";
import orderSlice from "../features/orderSlice";

export const rootReducer = combineReducers({
  auth: authSlice,
  order: orderSlice,
});

export const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "order"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;

api.interceptors.request.use(
  async (config) => {
    let token = null;
    try {
      const store = await getStoredState(persistConfig);
      token = store.auth.isAuth;
    } catch (error) {
      console.log("axios send request::::", error);
    }

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => error,
);
