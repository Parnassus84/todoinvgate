import React from 'react';
import { AppRoutes } from './screens/routes/app-routes';
import { TodoProvider } from './contexts/TodoContext';

function App() {
  return (
    <TodoProvider>
      <AppRoutes />
    </TodoProvider>
  );
}

export default App;
