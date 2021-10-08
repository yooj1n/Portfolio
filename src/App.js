import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import About from './Components/About';

function App() {
  return (
    <HelmetProvider>
    <About />
    </HelmetProvider>
  )
}

export default App;
