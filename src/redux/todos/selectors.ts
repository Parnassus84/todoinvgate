import { createSelector } from '@reduxjs/toolkit';
import { TRootState } from '../reducers';

export const selectTodos = (state: TRootState) => state;
export const todosSelector = createSelector(selectTodos, state => state.todoSection.todos);

export const todoSelector = (todoId: string) =>
  createSelector(todosSelector, todos => todos.find(t => t.id === todoId));