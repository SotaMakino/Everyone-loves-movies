import React from 'react';
import styled from 'styled-components';
import FirstView from './FirstView';

const App = () => (
  <Wrapper>
    <FirstView />
  </Wrapper>
);

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
`;

export default App;
