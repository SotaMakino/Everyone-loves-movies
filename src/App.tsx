import React from 'react';
import styled from 'styled-components';
import Footer from './components/Footer';
import Main from './components/Main';
import Header from './components/Header';

const App = () => (
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
