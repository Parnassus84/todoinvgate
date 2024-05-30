import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { EditTodo, Home } from '..';




export const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit-todo/:id" element={<EditTodo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
