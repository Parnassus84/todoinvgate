import React, { lazy, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useTodos } from '../hooks/useTodos';
import { useTodo } from '../contexts/context';
import { TodoStoreFacade } from '../contexts/facade';
import { useAppDispatch } from '../redux';
import { getTodosAction } from '../redux/todos';

const HomePage = lazy(async () => await import('../pages/Home'));
const TodoDetailPage = lazy(async () => await import('../pages/TodoDetail'));

export const AppRoutes = () => {
  const { dispatch: dispatchContext } = useTodo();
  const dispatch = useAppDispatch();
  const { todos } = useTodos();
  useEffect(() => {
    dispatchContext(TodoStoreFacade.getTodosSuccess(todos));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos]);

  useEffect(() => {
    dispatch(getTodosAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="/todo/:id" element={<TodoDetailPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
