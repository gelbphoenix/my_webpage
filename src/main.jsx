import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ThemeProvider from './Context/ThemeContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { inject } from '@vercel/analytics';
import 'flowbite';
import './Styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={new QueryClient()}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

inject();
