import { compose } from "@reduxjs/toolkit";
import { getTodosReducer } from './get-todos';

export const extraReducers = compose(getTodosReducer);

export { getTodosAction } from './get-todos';