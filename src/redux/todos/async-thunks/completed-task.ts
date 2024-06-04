import { createAsyncThunk } from '@reduxjs/toolkit';
import { TSliceExtraReducer } from '../..';
import { ITodoState } from '../state';
import { SLICE_NAMESPACE } from '../constants';
import { ITask, ITodo } from '../../../models';
import { taskService } from '../../../services';
import { TRootState } from '../../reducers';

export const completedTaskAction = createAsyncThunk(
  `${SLICE_NAMESPACE}/completedTask`,
  async ( params: ITask, { getState } )=> {
    const responseTask = await taskService.completedTask(params);
    const state = getState() as TRootState;
    
    const indexTodoTask = state.todoSection.todos.findIndex(
      (item: ITodo) => item.id === responseTask.todoId
    );
    if (indexTodoTask !== -1) {
      let newTodos = [...state.todoSection.todos];      
    
      const taskList = state.todoSection.todos[indexTodoTask].tasks.map(
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
      newTodos[indexTodoTask] = {...newTodos[indexTodoTask], tasks: taskList};
      return newTodos;
    }  
    return state.todoSection.todos; 
  }
);

export const completedTaskReducer: TSliceExtraReducer<ITodoState> = (builder) => {
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
