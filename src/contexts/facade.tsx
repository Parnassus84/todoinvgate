import { ITask, ITodo } from '../models';
import {
  AddTask,
  AddTodo,
  CompletedTask,
  EditTodo,
  GetTasks,
  GetTodos,
  GetTodosSuccess,
  RemoveTask,
  RemoveTodo,
  TodoActionTypes,
} from './actions';

export const TodoStoreFacade = {
  getTodos: (): GetTodos => ({
    type: TodoActionTypes.GET_TODOS,    
  }),
  getTodosSuccess: (todos: Array<ITodo>): GetTodosSuccess => ({
    type: TodoActionTypes.GET_TODOS_SUCCESS,
    payload: {todos},
  }),

  addTodo: (todo: ITodo): AddTodo => ({
    type: TodoActionTypes.ADD_TODO,
    payload: { todo },
  }),

  removeTodo: (todoId: string): RemoveTodo => ({
    type: TodoActionTypes.REMOVE_TODO,
    payload: { todoId },
  }),

  editTodo: (todoId: string, name: string): EditTodo => ({
    type: TodoActionTypes.EDIT_TODO,
    payload: { todoId, name },
  }),

  getTasks: (todoId: string, tasks: Array<ITask>): GetTasks => ({
    type: TodoActionTypes.GET_TASKS,
    payload: { todoId, tasks },
  }),

  addTask: (todoId: string, task: ITask): AddTask => ({
    type: TodoActionTypes.ADD_TASK,
    payload: { todoId, task },
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
