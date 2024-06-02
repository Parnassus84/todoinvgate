import { taskData } from "./data/task.data";
import { ITasksResponse } from "./interface/task.dto";


export const taskService = {
    getTasks: async (todoId: string ): Promise<ITasksResponse> => taskData.getTask(todoId),
}