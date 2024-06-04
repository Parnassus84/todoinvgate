import { createAsyncThunk } from '@reduxjs/toolkit';
import { TSliceExtraReducer } from '../..';
import { ITodoState } from '../state';
import { SLICE_NAMESPACE } from '../constants';
import { todoService } from '../../../services/todo/todo.service';
import { editTodoParams } from '../../../services/todo/interfaces/todo.dto';
import { ITodo } from '../../../models';


export const editTodoAction = createAsyncThunk(
  `${SLICE_NAMESPACE}/editTodo`,
  ({id: todoId, name}: editTodoParams) => todoService.updateTodo(todoId as string, name as string)

);

export const getTodosReducer: TSliceExtraReducer<ITodoState> = (builder) => {
  builder
    .addCase(editTodoAction.pending, (state) => {
      state.todoLoading = true;
      state.error = null;
    })
    .addCase(editTodoAction.fulfilled, (state, { payload }) => {
      const index = state.todos.findIndex(
        (item: ITodo) => item.id === payload.id
      );
      if (index !== -1) {
        const newTodos = [...state.todos];
        newTodos[index].name = payload.name as string;       
        state.todos = newTodos;
        state.todoLoading = false;
        state.error = null;
      }      
    })
    .addCase(editTodoAction.rejected, (state, { error }: any) => {
      state.todoLoading = false;
      state.error = error;
    });

  return builder;
};
