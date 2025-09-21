import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { LightboxProvider } from './components/lightbox';
import AppRoutes from './Routes';
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <LightboxProvider>
        <AppRoutes />
      </LightboxProvider>
    </HelmetProvider>
  );
}

export default App;
