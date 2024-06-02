import React, { Suspense } from 'react';
import { AppRoutes } from './pages/routes/app-routes';
import { TodoProvider } from './contexts/provider';
import { CircularProgress } from '@mui/material';

function App() {
  return (
    <TodoProvider>
      <Suspense fallback={<CircularProgress />}>
        <AppRoutes />
      </Suspense>
    </TodoProvider>
  );
}

export default App;
