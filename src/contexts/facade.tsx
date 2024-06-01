import { Todo } from '../models';
import {
  AddTask,
  AddTodo,
  CompletedTask,
  EditTodo,
  GetTodos,
  RemoveTask,
  RemoveTodo,
  TodoActionTypes,
} from './actions';

export const TodoStoreFacade = {
  getTodos: (todos: Array<Todo>): GetTodos => ({
    type: TodoActionTypes.GET_TODOS,
    payload: todos,
  }),

  addTodo: (name: string): AddTodo => ({
    type: TodoActionTypes.ADD_TODO,
    payload: { name },
  }),

  removeTodo: (todoId: number): RemoveTodo => ({
    type: TodoActionTypes.REMOVE_TODO,
    payload: { todoId },
  }),

  editTodo: (todoId: number, name: string): EditTodo => ({
    type: TodoActionTypes.EDIT_TODO,
    payload: { todoId, name },
  }),

  addTask: (todoId: number, name: string): AddTask => ({
    type: TodoActionTypes.ADD_TASK,
    payload: { todoId, name },
  }),

  removeTask: (todoId: number, taskId: number): RemoveTask => ({
    type: TodoActionTypes.REMOVE_TASK,
    payload: { todoId, taskId },
  }),

  completedTask: (todoId: number, taskId: number): CompletedTask => ({
    type: TodoActionTypes.COMPLETED_TASK,
    payload: { todoId, taskId },
  }),
};
