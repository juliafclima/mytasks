import React from 'react';

import Home from './src/pages/Home';
import {TasksProvider} from './src/context/TasksContext';

export default function App() {
  return (
    <TasksProvider>
      <Home />
    </TasksProvider>
  );
}
