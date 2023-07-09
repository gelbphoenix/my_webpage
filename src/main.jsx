import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './Styles/index.css';

import ThemeProvider from './Context/ThemeContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import 'flowbite';

import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import './Styles/simplebar.css';

import ResizeObserver from 'resize-observer-polyfill';
window.ResizeObserver = ResizeObserver;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={new QueryClient()}>
      <ThemeProvider>
        <SimpleBar forceVisible="y" autoHide={false} className="max-h-screen">
          <App />
        </SimpleBar>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
