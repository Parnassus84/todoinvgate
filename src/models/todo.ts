import { Task } from './task';

export interface ITodo {
  id: string;
  name: string;
  tasks: Array<Task>;
}
