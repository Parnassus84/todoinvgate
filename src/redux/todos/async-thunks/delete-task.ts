import { createAsyncThunk } from '@reduxjs/toolkit';
import { TSliceExtraReducer } from '../..';
import { ITodoState } from '../state';
import { SLICE_NAMESPACE } from '../constants';
import { taskService } from '../../../services';
import { ITask, ITodo } from '../../../models';

export const removeTasksAction = createAsyncThunk(
  `${SLICE_NAMESPACE}/removeTasks`,
  async (id: string, { getState }) => {
    const deletedTasks = await taskService.deleteTask(id);
    const state = getState() as ITodoState;
    const indexTask = state.todos.findIndex(
      (item: ITodo) => item.id === deletedTasks.todoId
    );
    if (indexTask !== -1) {
      const newTodos = [...state.todos];
      newTodos[indexTask].tasks = state.todos[indexTask].tasks.filter(
        (item: ITask) => item.id !== deletedTasks.id
      );
     return newTodos;
    }
    return state.todos;
  }
);

export const getTodosReducer: TSliceExtraReducer<ITodoState> = (builder) => {
  builder
    .addCase(removeTasksAction.pending, (state) => {
      state.tasksLoading = true;
      state.error = null;
    })
    .addCase(removeTasksAction.fulfilled, (state, { payload }) => {
      state.todos = payload;
      state.tasksLoading = false;
      state.error = null;
    })
    .addCase(removeTasksAction.rejected, (state, { error }: any) => {
      state.tasksLoading = false;
      state.error = error;
    });

  return builder;
};
