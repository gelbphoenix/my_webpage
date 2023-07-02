import React from 'react';
import ReactDOM from 'react-dom/client';
import 'flowbite';
import App from './App';
import './index.css';
import ThemeProvider from './Context/ThemeContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={new QueryClient()}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
