import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import FirstView from './FirstView';
import Header from './Header';

const App = () => (
  <Wrapper>
    <Header />
    <FirstView />
    <Footer />
  </Wrapper>
);

const Wrapper = styled.div``;

export default App;
