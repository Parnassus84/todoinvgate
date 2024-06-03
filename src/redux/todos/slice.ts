import { createSlice } from '@reduxjs/toolkit';
import { todoInitialState } from './state';
import { SLICE_NAMESPACE } from './constants';
import { reducers } from './reducers';
import { extraReducers } from './async-thunks';

export const todoSlice = createSlice({
  name: SLICE_NAMESPACE,
  initialState: todoInitialState,
  reducers,
  extraReducers,
});

const { reducer: todoReducer } = todoSlice;

export const { clearTodos } = todoSlice.actions;
export default todoReducer;
