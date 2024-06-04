import { ITodo } from "../../models";


export interface ITodoState {
  todos: Array<ITodo>;  
  loading: boolean;
  todoLoading: boolean;
  error: unknown;
  tasksLoading: boolean;
  taskLoading: boolean;
}

export const todoInitialState: ITodoState = {
  todos: [],  
  loading: false,
  todoLoading: false,
  tasksLoading: false,
  taskLoading: false,
  error: null
};
