import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import MainWrap from './Layout/MainWrap';
import About from './Screens/About';
import Head from './Screens/Head';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainWrap>
        <Head />
        <About />
      </MainWrap>
    </ThemeProvider>
  )
}

export default App;
