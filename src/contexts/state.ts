import { ITodo } from '../models';

export interface TodoState {
  todos: Array<ITodo>;
  loadingTodos: boolean;
}

export const initialState: TodoState = {
  todos: [],
  loadingTodos: false
};
