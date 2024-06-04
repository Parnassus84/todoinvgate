import React, { FC, ReactElement, Suspense } from 'react';
import { Provider } from 'react-redux';
import { render, RenderOptions } from '@testing-library/react';
import { PersistGate } from 'redux-persist/integration/react';

import { TodoProvider } from '../../contexts/provider';
import { CircularProgress } from '@mui/material';
import store, { persistor } from '../../redux';

interface Props {
  children: React.ReactNode;
}

const AllTheProviders = ({ children }: Props) => (
  <TodoProvider>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Suspense fallback={<CircularProgress />}>{children}</Suspense>
      </PersistGate>
    </Provider>
  </TodoProvider>
);

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
