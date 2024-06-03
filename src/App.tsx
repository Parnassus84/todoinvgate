import React, { Suspense } from 'react';
import { AppRoutes } from './pages/routes/app-routes';
import { TodoProvider } from './contexts/provider';
import { CircularProgress } from '@mui/material';
import { Provider } from 'react-redux';
import store, { persistor } from './redux';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <TodoProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Suspense fallback={<CircularProgress />}>
            <AppRoutes />
          </Suspense>
        </PersistGate>
      </Provider>
    </TodoProvider>
  );
}

export default App;
