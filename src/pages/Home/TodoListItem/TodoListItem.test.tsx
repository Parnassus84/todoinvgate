/* eslint-disable testing-library/no-render-in-setup */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { TodoListItem } from './TodoListItem';
import { ITodo } from '../../../models';

const mockTodo = {
  id: '1',
  name: 'Todo 1',
} as ITodo;

const mockEdit = jest.fn();
const mockDelete = jest.fn();
const mockView = jest.fn();

describe('TodoListItem', () => {
  beforeEach(() => {
    render(
      <TodoListItem
        todo={mockTodo}
        edit={mockEdit}
        deleted={mockDelete}
        view={mockView}
      />
    );
  });
  it('renders todo name correctly', async () => {
    const todoName = screen.getByText('Todo 1');
    expect(todoName).toBeInTheDocument();
  });

  it('calls edit callback when edit button is clicked', async () => {
    const editButton = screen.getByTestId('edit-button-1');
    fireEvent.click(editButton);

    expect(mockEdit).toHaveBeenCalled();
  });

  it('calls delete callback when delete button is clicked', async () => {
    const deleteButton = screen.getByTestId('delete-button-1');
    fireEvent.click(deleteButton);
    expect(mockDelete).toHaveBeenCalled();
  });

  it('calls view callback when list item button is clicked', async () => {
    const listItemButton = screen.getByTestId('view-button-1');
    fireEvent.click(listItemButton);
    expect(mockView).toHaveBeenCalled();
  });
});
