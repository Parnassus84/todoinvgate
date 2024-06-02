import { HttpApi } from "../../http/http.api";
import { ITasksResponse } from "../interface/task.dto";


export const taskData = {   
    getTask: async (todoId: string): Promise<ITasksResponse> => {
      const response = fetch(`${process.env.REACT_APP_API_URL}${HttpApi.GET_TASKS}?todoId=${todoId}`)
      .then((response) => response.json());
      return Promise.resolve(response);
  }
}