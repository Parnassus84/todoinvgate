import { ITask } from '../../../models';

export interface ITasksResponse extends Array<ITask> {}
export interface ISaveTaskParams extends Partial<Omit<ITask, 'id'>> {
  todoId: string;
};
export interface ITaskResponse extends ITask {};