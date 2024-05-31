import { Todo } from "../models";


export interface TodoState {
  todos: Array<Todo>;
  SelectedTodo: Todo | null; 
}

export const initialState: TodoState = {
  todos: [],
  SelectedTodo: null 
};