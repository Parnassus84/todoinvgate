import { createAsyncThunk } from '@reduxjs/toolkit';
import { TSliceExtraReducer } from '../..';
import { ITodoState } from '../state';
import { SLICE_NAMESPACE } from '../constants';
import { todoService } from '../../../services/todo/todo.service';

export const getTodosAction = createAsyncThunk(
  `${SLICE_NAMESPACE}/getTodos`,
  () => todoService.getTodos()
);

export const getTodosReducer: TSliceExtraReducer<ITodoState> = (builder) => {
  builder
    .addCase(getTodosAction.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(getTodosAction.fulfilled, (state, { payload }) => {
      state.todos = payload;
      state.loading = false;
      state.error = null;
    })
    .addCase(getTodosAction.rejected, (state, { error }: any) => {
      state.loading = false;
      state.error = error;
    });

  return builder;
};
