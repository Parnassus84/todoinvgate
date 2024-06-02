import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './reducer';
import { initialState } from './state';
import { TodoContext } from './context';
import { TodoStoreFacade } from './facade';
import { useTodos } from '../hooks/useTodos';

interface Props {
  children: React.ReactNode;
}
export const TodoProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const { loading, todos} = useTodos();

  useEffect( () => {       
    !loading && dispatch(TodoStoreFacade.getTodos(todos));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos]);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
