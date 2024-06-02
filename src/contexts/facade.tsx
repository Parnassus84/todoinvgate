import { ITodo } from '../models';
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
  getTodos: (todos: Array<ITodo>): GetTodos => ({
    type: TodoActionTypes.GET_TODOS,
    payload: todos,
  }),

  addTodo: (name: string): AddTodo => ({
    type: TodoActionTypes.ADD_TODO,
    payload: { name },
  }),

  removeTodo: (todoId: string): RemoveTodo => ({
    type: TodoActionTypes.REMOVE_TODO,
    payload: { todoId },
  }),

  editTodo: (todoId: string, name: string): EditTodo => ({
    type: TodoActionTypes.EDIT_TODO,
    payload: { todoId, name },
  }),

  addTask: (todoId: string, name: string): AddTask => ({
    type: TodoActionTypes.ADD_TASK,
    payload: { todoId, name },
  }),

  removeTask: (todoId: string, taskId: string): RemoveTask => ({
    type: TodoActionTypes.REMOVE_TASK,
    payload: { todoId, taskId },
  }),

  completedTask: (todoId: string, taskId: string): CompletedTask => ({
    type: TodoActionTypes.COMPLETED_TASK,
    payload: { todoId, taskId },
  }),
};
