/* eslint-disable testing-library/await-async-query */
/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { RenderResult, fireEvent, render, screen } from '@testing-library/react';
import { TodoLists } from './TodoLists';
import { ITodo } from '../../../models';

const mockTodos: Array<ITodo> = [
  { id: '1', name: 'Todo 1', tasks: [] },
  { id: '2', name: 'Todo 2', tasks: [] },
];

const mockEdit = jest.fn();
const mockDelete = jest.fn();
const mockView = jest.fn();

describe('TodoLists', () => {
  let component: RenderResult;
  beforeEach(() => {
    component = render(
      <TodoLists
        todos={mockTodos}
        onEdit={mockEdit}
        onDeleted={mockDelete}
        onView={mockView}
      />
    );
  });

  it('should render correctly', async () => {    
    const titleElement = await component.findByText('Todo 1');
    expect(titleElement).toBeDefined();
  });

  it('calls correct callback functions on actions', async () => {
    mockTodos.forEach((todo) => {
      const editButton = screen.getByTestId(`edit-button-${todo.id}`);
      const deleteButton = screen.getByTestId(`delete-button-${todo.id}`);
      const viewButton = screen.getByTestId(`view-button-${todo.id}`);

      fireEvent.click(editButton);
      expect(mockEdit).toHaveBeenCalledWith(todo);

      fireEvent.click(deleteButton);
      expect(mockDelete).toHaveBeenCalledWith(todo);

      fireEvent.click(viewButton);
      expect(mockView).toHaveBeenCalledWith(todo.id);
    });
  });
});
