import { ITodoState, todoInitialState } from "./todos/state";

export interface IState {
  todoSection: ITodoState;  
}

export const initialState: IState = {
  todoSection: todoInitialState
}