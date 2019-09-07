import React from 'react';
import Footer from './components/Footer';
import Main from './components/Main';
import Header from './components/Header';
import styled from 'styled-components';

const App = () => {
  return (
    <Wrapper>
      <Header />
      <Main />
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 -10px;
`;

export default App;
