import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { EditTodo, Home } from '..';
import { TodoDetail } from '../TodoDetail/TodoDetail';

export const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit-todo/:id" element={<EditTodo />} />
          <Route path="/todo/:id" element={<TodoDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
