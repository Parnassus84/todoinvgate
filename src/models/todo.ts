import { Task } from './task';

export interface Todo {
  id: number;
  name: string;
  tasks: Array<Task>;
}
