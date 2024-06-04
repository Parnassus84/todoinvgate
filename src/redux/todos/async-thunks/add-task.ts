import { createAsyncThunk } from '@reduxjs/toolkit';
import { TSliceExtraReducer } from '../..';
import { ITodoState } from '../state';
import { SLICE_NAMESPACE } from '../constants';
import { ITodo } from '../../../models';
import { IAddTaskParams } from '../../../services/task/interface/task.dto';
import { taskService } from '../../../services';

export const addTaskAction = createAsyncThunk(
  `${SLICE_NAMESPACE}/addTask`,
  async ( params: IAddTaskParams, { getState } )=> {
    const responseTasks = await taskService.addTask(params);
    const state = getState() as ITodoState;
    const indexTodo = state.todos.findIndex(
      (item: ITodo) => item.id === params.todoId
    );
    if (indexTodo !== -1) {
      const newTodos = [...state.todos];
      if (state.todos[indexTodo].tasks) {         
        newTodos[indexTodo].tasks = [            
          ...state.todos[indexTodo].tasks,
          responseTasks
        ];
      } else {
        newTodos[indexTodo].tasks = [responseTasks];
      }     
      return newTodos;
    }
    return state.todos;
    
  }
);

export const getTodosReducer: TSliceExtraReducer<ITodoState> = (builder) => {
  builder
    .addCase(addTaskAction.pending, (state) => {     
      state.taskLoading = true;
      state.error = null;
    })
    .addCase(addTaskAction.fulfilled, (state, { payload }) => {
      state.todos = payload;    
      state.taskLoading = false;
      state.error = null;
    })
    .addCase(addTaskAction.rejected, (state, { error }: any) => {
      state.taskLoading = false;
      state.error = error;
    });

  return builder;
};
