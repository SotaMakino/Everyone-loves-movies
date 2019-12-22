import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import FirstView from './FirstView';

const App = () => (
  <Wrapper>
    <FirstView />
    <Footer />
  </Wrapper>
);

const Wrapper = styled.div``;

export default App;
