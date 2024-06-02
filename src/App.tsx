import React, { Suspense } from 'react';
import { AppRoutes } from './pages/routes/app-routes';
import { TodoProvider } from './contexts/provider';

function App() {
  return (
    <TodoProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <AppRoutes />
      </Suspense>
    </TodoProvider>
  );
}

export default App;
