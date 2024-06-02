import { ITodo } from '../../../models';

export interface IGetTodosResponse extends Array<ITodo> {};
export interface ISaveTodoParams extends Partial<Omit<ITodo, 'id, tasks'>> {};
export interface ISaveTodoResponse extends Partial<Omit<ITodo, 'tasks'>> {};

export interface ITodoResponse extends Partial<Omit<ITodo, 'tasks'>> {};