import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import FullWrap from './Layout/FullWrap';
import About from './Screens/About';
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
      </FullWrap>
    </ThemeProvider>
  )
}

export default App;
