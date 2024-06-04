import React, { lazy, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAppDispatch } from '../redux';
import { getTodosAction } from '../redux/todos';

const HomePage = lazy(async () => await import('../pages/Home'));
const TodoDetailPage = lazy(async () => await import('../pages/TodoDetail'));

export const AppRoutes = () => {
  const dispatch = useAppDispatch();

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
