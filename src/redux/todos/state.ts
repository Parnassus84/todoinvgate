import { ITodo } from "../../models";


export interface ITodoState {
  todos: Array<ITodo>;  
  loading: boolean;
  error: unknown;
}

export const todoInitialState: ITodoState = {
  todos: [],  
  loading: false,
  error: null
};
