import { ITask } from '../../../models';

export interface ITasksResponse extends Array<ITask> {}
export interface IAddTaskParams extends Partial<Omit<ITask, 'id'>> {
  todoId: string;
};
export interface ITaskResponse extends ITask {};