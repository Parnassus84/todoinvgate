import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './reducer';
import { initialState } from './state';
import { TodoContext } from './context';
import { localStorageService } from '../services/local-storage.service';
import { TodoStoreFacade } from './facade';

interface Props {
  children: React.ReactNode;
}
export const TodoProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  useEffect(() => {
    const todos = localStorageService.getTodos();
    dispatch(TodoStoreFacade.getTodos(todos));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
