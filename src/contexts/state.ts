import { ITodo } from '../models';

export interface TodoState {
  todos: Array<ITodo>;
}

export const initialState: TodoState = {
  todos: [],
};
