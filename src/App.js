import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import FullWrap from './Layout/FullWrap';
import About from './Screens/About';
import Contact from './Screens/Contact';
import Footer from './Screens/Footer';
import Head from './Screens/Head';
import Strength from './Screens/Strength';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <FullWrap>
        <Head />
        <About />
        <Strength />
        <Contact />
      </FullWrap>
      <Footer />
    </ThemeProvider>
  )
}

export default App;
