import React from 'react';
import styled, { ThemeProvider } from 'styled-components/macro';
import GlobalStyle from './Global';
import Header from './layouts/Header';
import { Button, Card } from './elements';

const theme = {
  colors: {
    primary: '#E54B4B',
    secondary: '#DBED61'
  }
};

const themeTwo = {
  colors: {
    primary: '#524763',
    secondary: '#82D8D8'
  }
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header />
        <GlobalStyle />
        <main
          css={`
            // background: red;
            h2 {
              // font-size: 100px;
            }
          `}
        >
          <Button>Say Hello</Button>
          <ThemeProvider theme={themeTwo}>
            <Card>
              <h2>Card Heading</h2>
              <Card.Button as="a">Say Hello</Card.Button>
              <Card.Button modifiers="cancel">Say Hello</Card.Button>
            </Card>
          </ThemeProvider>
          {/* <Button modifiers="cancel">Say Hello</Button>
        <Button modifiers="small">Say Hello</Button>
        <Button modifiers={['small', 'cancel']}>Say Hello</Button> */}
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;

// const Fake = styled.main`
//   background: red;
//   h2 {
//     font-size: 100px;
//   }
// `;
