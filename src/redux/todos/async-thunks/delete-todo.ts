import { createAsyncThunk } from '@reduxjs/toolkit';
import { TSliceExtraReducer } from '../..';
import { ITodoState } from '../state';
import { SLICE_NAMESPACE } from '../constants';
import { todoService } from '../../../services/todo/todo.service';
import { ITodo } from '../../../models';

export const deleteTodoAction = createAsyncThunk(
  `${SLICE_NAMESPACE}/deleteTodo`,
  (id: string) => todoService.deleteTodo(id)
);

export const deleteTodoReducer: TSliceExtraReducer<ITodoState> = (builder) => {
  builder
    .addCase(deleteTodoAction.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(deleteTodoAction.fulfilled, (state, { payload }) => {
      const filteredTodos = state.todos.filter(
        (item: ITodo) => item.id !== payload.id
      );

      state.todos = filteredTodos;
      state.loading = false;
    })
    .addCase(deleteTodoAction.rejected, (state, { error }: any) => {
      state.loading = false;
      state.error = error;
    });

  return builder;
};
