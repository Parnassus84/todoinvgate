
import { ITodoState, todoInitialState } from './state';
import { TSliceReducer } from '../index';

export const clearTodos: TSliceReducer<ITodoState> = state => {
  state.todos = todoInitialState.todos;
}


// export const addTodo: TSliceReducer<ITodoState, ITodo> = (
//   state,
//   { payload }
// ) => {
//   state.todos = [...state.todos, payload];
// };

// export const editTodo: TSliceReducer<ITodoState, ITodo> = (state, {payload}) => {
//   const newTodos = state.todos.map((todo) => {
//     if (todo.id === payload.id) {
//       return {
//         ...todo,
//         name: payload.name,
//       };
//     }
//     return todo;
//   });
//   state.todos = newTodos;
// };

// export const deleteTodo: TSliceReducer<ITodoState, string> = (state, {payload}) => {
//   const newTodos = state.todos.filter(
//     (todo) => todo.id !== payload
//   );
//   state.todos = newTodos;
// };


export const reducers = {clearTodos};