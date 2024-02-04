import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import React from 'react';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div></div>
    </QueryClientProvider>
  );
}

export default App;
