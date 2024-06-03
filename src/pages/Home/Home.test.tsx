import React from 'react';
import { render, fireEvent, waitFor, screen, RenderResult } from '@testing-library/react';
import HomePage from './Home';
import * as router from 'react-router';
import { MemoryRouter } from 'react-router';


jest.mock('../../contexts/context', () => ({
  useTodo: () => ({
    state: {
      todos: [],
      loadingTodos: false,
    },
    dispatch: jest.fn(),
  }),
}));


describe('HomePage', () => {
  let component: RenderResult;
  const navigate = jest.fn();
  beforeEach(() => {
    jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);
    // eslint-disable-next-line testing-library/no-render-in-setup
    component = render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
  });
});