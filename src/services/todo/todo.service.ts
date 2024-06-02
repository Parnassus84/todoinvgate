import { todoData } from './data/todo.data';
import {
  ISaveTodoParams,
  IGetTodosResponse,
  ISaveTodoResponse,  
  ITodoResponse,
} from './interfaces/todo.dto';

export const todoService = {
  getTodos: async (): Promise<IGetTodosResponse> => todoData.getTodos(),
  saveTodo: async (todo: ISaveTodoParams): Promise<ISaveTodoResponse> =>
    todoData.saveTodo(todo),
  deleteTodo: async (id: string): Promise<ITodoResponse> =>
    todoData.deleteTodo(id),
  updateTodo: async (id: string, name: string): Promise<ITodoResponse> => todoData.updateTodo(id, name),
};
