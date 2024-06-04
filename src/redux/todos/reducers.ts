import { ITodoState, todoInitialState } from './state';
import { TSliceReducer } from '../index';

export const clearTodos: TSliceReducer<ITodoState> = (state) => {
  state.todos = todoInitialState.todos;
};

export const reducers = { clearTodos };
