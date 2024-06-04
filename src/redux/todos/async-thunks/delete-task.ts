import { createAsyncThunk } from '@reduxjs/toolkit';
import { TSliceExtraReducer } from '../..';
import { ITodoState } from '../state';
import { SLICE_NAMESPACE } from '../constants';
import { taskService } from '../../../services';
import { ITask, ITodo } from '../../../models';
import { TRootState } from '../../reducers';

export const deleteTaskAction = createAsyncThunk(
  `${SLICE_NAMESPACE}/deleteTasks`,
  async (id: string, { getState }) => {
    const deletedTasks = await taskService.deleteTask(id);
    const state = getState() as TRootState;
    const indexTask = state.todoSection.todos.findIndex(
      (item: ITodo) => item.id === deletedTasks.todoId
    );
    if (indexTask !== -1) {
      const newTodos = [...state.todoSection.todos];
      const tasksWODelete = state.todoSection.todos[indexTask].tasks.filter(
        (item: ITask) => item.id !== deletedTasks.id
      );
      newTodos[indexTask] = {...newTodos[indexTask] , tasks: [...tasksWODelete]};
     return newTodos;
    }
    return state.todoSection.todos;
  }
);

export const deleteTaskReducer: TSliceExtraReducer<ITodoState> = (builder) => {
  builder
    .addCase(deleteTaskAction.pending, (state) => {
      state.tasksLoading = true;
      state.error = null;
    })
    .addCase(deleteTaskAction.fulfilled, (state, { payload }) => {
      state.todos = payload;
      state.tasksLoading = false;
      state.error = null;
    })
    .addCase(deleteTaskAction.rejected, (state, { error }: any) => {
      state.tasksLoading = false;
      state.error = error;
    });

  return builder;
};
