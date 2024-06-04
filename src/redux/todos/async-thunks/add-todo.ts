import { createAsyncThunk } from '@reduxjs/toolkit';
import { TSliceExtraReducer } from '../..';
import { ITodoState } from '../state';
import { SLICE_NAMESPACE } from '../constants';
import { todoService } from '../../../services/todo/todo.service';
import { IAddTodoParams } from '../../../services/todo/interfaces/todo.dto';
import { ITodo } from '../../../models';

export const addTodoAction = createAsyncThunk(
  `${SLICE_NAMESPACE}/addTodo`,
  async (payload: IAddTodoParams) => {
    const response = await todoService.addTodo(payload);
    const todo = { ...response, tasks: [] } as ITodo;
    return todo;
  }
);

export const addTodoReducer: TSliceExtraReducer<ITodoState> = (builder) => {
  builder
    .addCase(addTodoAction.pending, (state) => {
      state.todoLoading = true;
      state.error = null;
    })
    .addCase(addTodoAction.fulfilled, (state, { payload }) => {
      state.todos = [...state.todos, payload];
      state.todoLoading = false;
      state.error = null;
    })
    .addCase(addTodoAction.rejected, (state, { error }: any) => {
      state.todoLoading = false;
      state.error = error;
    });

  return builder;
};
