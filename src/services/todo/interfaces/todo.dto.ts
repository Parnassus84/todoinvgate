import { ITodo } from '../../../models';

export interface IGetTodosResponse extends Array<ITodo> {};
export interface IAddTodoParams extends Partial<Omit<ITodo, 'id, tasks'>> {};
export interface IAddTodoResponse extends Partial<Omit<ITodo, 'tasks'>> {};
export interface editTodoParams extends Partial<Omit<ITodo, 'tasks'>> {};

export interface ITodoResponse extends Partial<Omit<ITodo, 'tasks'>> {};