import React, { lazy, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useTodos } from '../../hooks/useTodos';
import { useTodo } from '../../contexts/context';
import { TodoStoreFacade } from '../../contexts/facade';

const HomePage = lazy(async() => await import('../Home/Home'));
const TodoDetailPage = lazy(async() => await import('../TodoDetail/TodoDetail'));

export const AppRoutes = () => {
  const { dispatch } = useTodo();
  const { todos } = useTodos();
  useEffect(() => {  
    dispatch(TodoStoreFacade.getTodosSuccess(todos));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="/todo/:id" element={<TodoDetailPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};
