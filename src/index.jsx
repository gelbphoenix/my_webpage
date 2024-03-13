import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import 'flowbite';
import SimpleBar from 'simplebar-react';

import App from '@/App';
import ThemeProvider from 'Contexts/ThemeContext';
import 'Styles/index.css';
import 'simplebar-react/dist/simplebar.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={new QueryClient()}>
    <ThemeProvider>
      <SimpleBar className="max-h-screen">
        <App />
      </SimpleBar>
    </ThemeProvider>
  </QueryClientProvider>
);
