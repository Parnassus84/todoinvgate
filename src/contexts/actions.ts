import { ITask, ITodo } from '../models';

export enum TodoActionTypes {
  GET_TODOS = 'GET_TODOS',
  GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS',
  ADD_TODO = 'ADD_TODO',
  REMOVE_TODO = 'REMOVE_TODO',
  EDIT_TODO = 'EDIT_TODO',
  GET_TASKS = 'GET_TASKS',
  ADD_TASK = 'ADD_TASK',
  COMPLETED_TASK = 'COMPLETED_TASK',
  REMOVE_TASK = 'REMOVE_TASK',
}

export interface GetTodos {
  type: TodoActionTypes.GET_TODOS;  
}

export interface GetTodosSuccess {
  type: TodoActionTypes.GET_TODOS_SUCCESS;  
  payload: {todos: Array<ITodo>};
}

export interface AddTodo {
  type: TodoActionTypes.ADD_TODO;
  payload: { todo: ITodo };
}

export interface RemoveTodo {
  type: TodoActionTypes.REMOVE_TODO;
  payload: { todoId: string };
}

export interface EditTodo {
  type: TodoActionTypes.EDIT_TODO;
  payload: { todoId: string; name: string };
}

export interface GetTasks {
  type: TodoActionTypes.GET_TASKS;
  payload: { todoId: string, tasks: Array<ITask> };
}

export interface AddTask {
  type: TodoActionTypes.ADD_TASK;
  payload: { todoId:string, task: ITask };
}

export interface CompletedTask {
  type: TodoActionTypes.COMPLETED_TASK;
  payload: { todoId: string; taskId: string };
}

export interface RemoveTask {
  type: TodoActionTypes.REMOVE_TASK;
  payload: { todoId: string; taskId: string };
}

export type TodoActions =
  | GetTodos
  | GetTodosSuccess
  | AddTodo
  | RemoveTodo
  | EditTodo
  | GetTasks
  | AddTask
  | CompletedTask
  | RemoveTask;
