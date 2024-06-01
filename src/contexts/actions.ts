import { Todo } from '../models';

export enum TodoActionTypes {
  GET_TODOS = 'GET_TODOS',
  ADD_TODO = 'ADD_TODO',
  REMOVE_TODO = 'REMOVE_TODO',
  EDIT_TODO = 'EDIT_TODO',
  ADD_TASK = 'ADD_TASK',
  COMPLETED_TASK = 'COMPLETED_TASK',
  REMOVE_TASK = 'REMOVE_TASK',
}

export interface GetTodos {
  type: TodoActionTypes.GET_TODOS;
  payload: Array<Todo>;
}

export interface AddTodo {
  type: TodoActionTypes.ADD_TODO;
  payload: { name: string };
}

export interface RemoveTodo {
  type: TodoActionTypes.REMOVE_TODO;
  payload: { todoId: number };
}

export interface EditTodo {
  type: TodoActionTypes.EDIT_TODO;
  payload: { todoId: number; name: string };
}

export interface AddTask {
  type: TodoActionTypes.ADD_TASK;
  payload: { todoId: number; name: string };
}

export interface CompletedTask {
  type: TodoActionTypes.COMPLETED_TASK;
  payload: { todoId: number; taskId: number };
}

export interface RemoveTask {
  type: TodoActionTypes.REMOVE_TASK;
  payload: { todoId: number; taskId: number };
}

export type TodoActions =
  | GetTodos
  | AddTodo
  | RemoveTodo
  | EditTodo
  | AddTask
  | CompletedTask
  | RemoveTask;
