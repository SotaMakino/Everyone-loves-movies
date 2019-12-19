import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Main from './Main';
import Header from './Header';

const App: React.SFC = () => (
  <Wrapper>
    <Header />
    <Main />
    <Footer />
  </Wrapper>
);

const Wrapper = styled.div`
  margin: 0 -10px;
`;

export default App;
