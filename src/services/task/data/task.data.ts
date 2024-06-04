import { ITask } from '../../../models';
import { HttpApi } from '../../http/http.api';
import { IAddTaskParams, ITasksResponse } from '../interface/task.dto';

export const taskData = {
  getTask: async (todoId: string): Promise<ITasksResponse> => {
    const response = fetch(
      `${process.env.REACT_APP_API_URL}${HttpApi.GET_TASKS}?todoId=${todoId}`
    ).then((response) => response.json());
    return Promise.resolve(response);
  },
  addTask: async (params: IAddTaskParams): Promise<ITask> => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params),
    };

    const response = fetch(
      `${process.env.REACT_APP_API_URL}${HttpApi.GET_TASKS}`,
      requestOptions
    ).then((response) => response.json());
    return Promise.resolve(response);
  },
  completedTask: async (task: ITask): Promise<ITask> => {
    const requestOptions = {
      method: 'PUT',     
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({...task, checked: !task.checked}), 
    };

    const response = fetch(
      `${process.env.REACT_APP_API_URL}${HttpApi.GET_TASKS}/${task.id}`,
      requestOptions
    ).then((response) => response.json());
    return Promise.resolve(response);
  },
  deleteTask: async (id: string): Promise<ITask> => {
    const requestOptions = {
      method: 'DELETE',      
    };

    const response = fetch(
      `${process.env.REACT_APP_API_URL}${HttpApi.GET_TASKS}/${id}`,
      requestOptions
    ).then((response) => response.json());
    return Promise.resolve(response);
  },
};
