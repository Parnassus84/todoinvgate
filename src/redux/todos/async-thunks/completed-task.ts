import { createAsyncThunk } from '@reduxjs/toolkit';
import { TSliceExtraReducer } from '../..';
import { ITodoState } from '../state';
import { SLICE_NAMESPACE } from '../constants';
import { ITask, ITodo } from '../../../models';
import { taskService } from '../../../services';

export const completedTaskAction = createAsyncThunk(
  `${SLICE_NAMESPACE}/completedTask`,
  async ( params: ITask, { getState } )=> {
    const responseTask = await taskService.completedTask(params);
    const state = getState() as ITodoState;
    const indexTodoTask = state.todos.findIndex(
      (item: ITodo) => item.id === responseTask.todoId
    );
    if (indexTodoTask !== -1) {
      const newTodos = [...state.todos];
      newTodos[indexTodoTask].tasks = state.todos[indexTodoTask].tasks.map(
        (item: ITask) => {
          if (item.id === responseTask.id) {
            return {
              ...item,
              checked: !item.checked,
            };
          }
          return item;
        }
      );
      return newTodos;
    }  
    return state.todos; 
  }
);

export const getTodosReducer: TSliceExtraReducer<ITodoState> = (builder) => {
  builder
    .addCase(completedTaskAction.pending, (state) => {     
      state.taskLoading = true;
      state.error = null;
    })
    .addCase(completedTaskAction.fulfilled, (state, { payload }) => {
      state.todos = payload;    
      state.taskLoading = false;
      state.error = null;
    })
    .addCase(completedTaskAction.rejected, (state, { error }: any) => {
      state.taskLoading = false;
      state.error = error;
    });

  return builder;
};
