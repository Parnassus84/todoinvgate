import { ITodo } from "../../models";


export interface ITodoState {
  todos: Array<ITodo>;  
  loading: boolean;
  todoLoading: boolean;
  error: unknown;
}

export const todoInitialState: ITodoState = {
  todos: [],  
  loading: false,
  todoLoading: false,
  error: null
};
