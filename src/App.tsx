import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import AppRouter from 'AppRouter';
import './App.css';
import { useSelector } from 'react-redux';
import { RootState } from 'store/modules';
import LogIn from './pages/login';

const queryClient = new QueryClient();

function App() {
  const displayName = useSelector((state: RootState) => state.auth.displayName);

  return (
    <QueryClientProvider client={queryClient}>
      {displayName ? <AppRouter /> : <LogIn />}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
