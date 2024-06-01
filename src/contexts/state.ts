import { Todo } from '../models';

export interface TodoState {
  todos: Array<Todo>;
}

export const initialState: TodoState = {
  todos: [],
};
