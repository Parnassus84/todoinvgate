import { createContext, useContext } from "react";
import { Todo } from "../models";

interface TodoState {
  todos: Array<Todo>;
  getTodos: () => void;
  addTodo: (name: string) => void;
  removeTodo: (todoId: number) => void;
  editTodo: (todo: Todo) => void;
  addTask: (todoId: number, name: string) => void;
  removeTask: (todoId: number, taskId: number) => void;
  filterTask: (todoId: number, filter: string) => void;
}

export const initialState: TodoState = {
  todos: [],
  getTodos: () => {},
  addTodo: () => {},
  removeTodo: () => {},
  editTodo: () => {},
  addTask: () => {},
  removeTask: () => {},
  filterTask: () => {},
};

export const TodoContext = createContext(initialState);
export const useTodo = () => useContext(TodoContext);