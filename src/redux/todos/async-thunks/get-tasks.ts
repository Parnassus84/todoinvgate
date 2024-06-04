import { createAsyncThunk } from '@reduxjs/toolkit';
import { TSliceExtraReducer } from '../..';
import { ITodoState } from '../state';
import { SLICE_NAMESPACE } from '../constants';
import { taskService } from '../../../services';
import { ITodo } from '../../../models';

export const getTasksAction = createAsyncThunk(
  `${SLICE_NAMESPACE}/getTasks`,
  async (id: string, { getState }) => {
    const tasks = await taskService.getTasks(id);
    const state = getState() as ITodoState;
    const todos = state.todos.map((item: ITodo) => {
      if (item.id === id) {
        return {
          ...item,
          tasks,
        };
      }
      return item;
    });
    return todos;
  }
);

export const getTodosReducer: TSliceExtraReducer<ITodoState> = (builder) => {
  builder
    .addCase(getTasksAction.pending, (state) => {
      state.tasksLoading = true;
      state.error = null;
    })
    .addCase(getTasksAction.fulfilled, (state, { payload }) => {
      state.todos = payload;
      state.tasksLoading = false;
      state.error = null;
    })
    .addCase(getTasksAction.rejected, (state, { error }: any) => {
      state.tasksLoading = false;
      state.error = error;
    });

  return builder;
};