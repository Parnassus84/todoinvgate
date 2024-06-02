import { ITask } from '../../models';
import { taskData } from './data/task.data';
import { ISaveTaskParams, ITasksResponse } from './interface/task.dto';

export const taskService = {
  getTasks: async (todoId: string): Promise<ITasksResponse> =>
    taskData.getTask(todoId),
  saveTask: async (params: ISaveTaskParams): Promise<ITask> => 
    taskData.saveTask(params),
  completedTask: async (task: ITask): Promise<ITask> => 
    taskData.completedTask(task),
  deleteTask: async (id: string): Promise<ITask> => taskData.deleteTask(id)
};
