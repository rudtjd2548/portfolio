import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import counterReducer from "@/redux/slices/counter";

const rootReducer = combineReducers({
  counter: counterReducer,
});

const middleWares = [];
middleWares.push(createLogger());

export const store = configureStore({
  reducer: rootReducer,
  middleware: [...middleWares],
});
