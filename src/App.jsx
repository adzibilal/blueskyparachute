import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import AppRoutes from './Routes';
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <AppRoutes />
    </HelmetProvider>
  );
}

export default App;
