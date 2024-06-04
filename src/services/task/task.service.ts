import { ITask } from '../../models';
import { taskData } from './data/task.data';
import { IAddTaskParams, ITasksResponse } from './interface/task.dto';

export const taskService = {
  getTasks: async (todoId: string): Promise<ITasksResponse> =>
    taskData.getTask(todoId),
  addTask: async (params: IAddTaskParams): Promise<ITask> => 
    taskData.addTask(params),
  completedTask: async (task: ITask): Promise<ITask> => 
    taskData.completedTask(task),
  deleteTask: async (id: string): Promise<ITask> => taskData.deleteTask(id)
};
