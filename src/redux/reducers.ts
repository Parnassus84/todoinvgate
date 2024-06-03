import { combineReducers } from "@reduxjs/toolkit";
import todoReducer from "./todos";

export const rootReducer = combineReducers({
  todoSection: todoReducer
});

export type TRootState = ReturnType<typeof rootReducer>;