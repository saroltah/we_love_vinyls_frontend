import React from 'react';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { CurrentUserProvider } from './context/CurrentUserContext';
import { createRoot } from 'react-dom/client';

createRoot(
  <Router>
    <CurrentUserProvider>
      <App />
    </CurrentUserProvider>
  </Router>,
  document.getElementById('root'),
);
