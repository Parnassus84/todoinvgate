import { todoData } from './data/todo.data';
import {
  IAddTodoParams,
  IGetTodosResponse,
  IAddTodoResponse,  
  ITodoResponse,
} from './interfaces/todo.dto';

export const todoService = {
  getTodos: async (): Promise<IGetTodosResponse> => todoData.getTodos(),
  addTodo: async (todo: IAddTodoParams): Promise<IAddTodoResponse> =>
    todoData.saveTodo(todo),
  deleteTodo: async (id: string): Promise<ITodoResponse> =>
    todoData.deleteTodo(id),
  updateTodo: async (id: string, name: string): Promise<ITodoResponse> => todoData.updateTodo(id, name),
};
