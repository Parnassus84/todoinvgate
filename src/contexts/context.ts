import React, { createContext, useContext } from 'react';

import { TodoActions } from './actions';
import { TodoState, initialState } from './state';

export const TodoContext = createContext<{
  state: TodoState;
  dispatch: React.Dispatch<TodoActions>;
}>({
  state: initialState,
  dispatch: () => undefined,
});

export const useTodo = () => useContext(TodoContext);
