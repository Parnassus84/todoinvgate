import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '..';
import { TodoDetail } from '../TodoDetail/TodoDetail';

export const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo/:id" element={<TodoDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
