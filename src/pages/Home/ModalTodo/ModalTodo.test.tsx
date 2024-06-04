/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ModalTodo } from './ModalTodo';
import { IForm } from '../models';
import { ITodo } from '../../../models';
import { formSchema } from './schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

describe('ModalTodo Component', () => {
  const mockSubmit = jest.fn();
  const mockHandleClose = jest.fn();
  const todo: ITodo = { id: '1', name: 'Test Todo', tasks: [] };

  const renderComponent = (showModal: boolean, todo?: ITodo) => {
    return render(
      <ModalTodo 
        showModal={showModal} 
        handleClose={mockHandleClose} 
        submit={mockSubmit} 
        todo={todo} 
      />
    );
  };

  it('renders correctly when showModal is true', () => {
    renderComponent(true, todo);

    expect(screen.getByText(`Editar TO-DO ${todo.name}`)).toBeInTheDocument();
    expect(screen.getByLabelText('Nombre')).toBeInTheDocument();
  });

  test('renders correctly when showModal is false', () => {
    const { queryByText } = renderComponent(false);

    expect(queryByText(`Editar TO-DO ${todo.name}`)).toBeNull();
  });

  it('calls handleClose when the close button is clicked', () => {
    renderComponent(true, todo);

    fireEvent.click(screen.getByLabelText(/close/i));
    expect(mockHandleClose).toHaveBeenCalledTimes(1);
  });  
});
