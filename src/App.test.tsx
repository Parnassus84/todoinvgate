import React, { Suspense } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './redux';
import { TodoProvider } from './contexts/provider';
import { CircularProgress } from '@mui/material';

jest.mock('@mui/material', () => ({
  CircularProgress: jest.fn(() => <div data-testid="loading">Loading...</div>),
}));

jest.mock('./pages/routes/app-routes', () => ({
  AppRoutes: jest.fn(() => <div>App Routes</div>),
}));

jest.mock('./contexts/provider', () => ({
  TodoProvider: jest.fn(({ children }) => <div>{children}</div>),
}));

jest.mock('redux-persist/integration/react', () => ({
  PersistGate: jest.fn(({ children }) => <div>{children}</div>),
}));

describe('App component', () => {
  it('renders without crashing', () => {
    const view = render(
      <TodoProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Suspense fallback={<CircularProgress />}>
              <App />
            </Suspense>
          </PersistGate>
        </Provider>
      </TodoProvider>
    );

    expect(view).toBeTruthy();
  });

});
