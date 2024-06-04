import { HttpApi } from '../../http/http.api';
import { IAddTodoParams, IGetTodosResponse, IAddTodoResponse, ITodoResponse } from '../interfaces/todo.dto';

export const todoData = {
  getTodos: async (): Promise<IGetTodosResponse> => {
    const response = fetch(
      `${process.env.REACT_APP_API_URL}${HttpApi.GET_TODOS}`
    ).then((response) => response.json());
    return Promise.resolve(response);
  },
  saveTodo: async (params: IAddTodoParams): Promise<IAddTodoResponse> => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params),
    };

    const response = fetch(
      `${process.env.REACT_APP_API_URL}${HttpApi.GET_TODOS}`,
      requestOptions
    ).then((response) => response.json());
    return Promise.resolve(response);
  },
  deleteTodo: async (id: string): Promise<ITodoResponse> => {
    const requestOptions = {
      method: 'DELETE',      
    };

    const response = fetch(
      `${process.env.REACT_APP_API_URL}${HttpApi.GET_TODOS}/${id}`,
      requestOptions
    ).then((response) => response.json());
    return Promise.resolve(response);
  },
  updateTodo: async (id: string, name: string): Promise<ITodoResponse> => {
    const requestOptions = {
      method: 'PUT',     
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({name}), 
    };

    const response = fetch(
      `${process.env.REACT_APP_API_URL}${HttpApi.GET_TODOS}/${id}`,
      requestOptions
    ).then((response) => response.json());
    return Promise.resolve(response);
  },
};
