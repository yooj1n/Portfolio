import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import FullWrap from './Layout/FullWrap';
import About from './Screens/About';
import Contact from './Screens/Contact';
import Footer from './Screens/Footer';
import Head from './Screens/Head';
import Projects from './Screens/Projects';
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
        <Projects />
        <Contact />
      </FullWrap>
      <Footer />
    </ThemeProvider>
  )
}

export default App;
