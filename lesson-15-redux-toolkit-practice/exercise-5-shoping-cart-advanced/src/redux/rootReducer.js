import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { filterCartReducer } from "./reducer";
import cartReducer from "./toolkit/slice";

const persistConfig = {
  key: "cart",
  storage,
};

const combreducer = combineReducers({
  cart: cartReducer,
});

export const persistedReducer = persistReducer(persistConfig, combreducer);
