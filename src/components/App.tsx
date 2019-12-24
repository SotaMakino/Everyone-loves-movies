import React from 'react';
import styled from 'styled-components';
import FirstView from './FirstView';
import Header from './Header';

const App = () => (
  <Wrapper>
    <Header />
    <FirstView />
  </Wrapper>
);

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  background-color: #a7ffeb;
`;

export default App;
