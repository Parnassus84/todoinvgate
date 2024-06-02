import { ITask } from './task';

export interface ITodo {
  id: string;
  name: string;
  tasks: Array<ITask>;
}
