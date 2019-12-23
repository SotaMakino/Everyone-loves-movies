import React from 'react';
import styled, { keyframes } from 'styled-components';
import Header from './Header';

const FirstView = () => {
  return (
    <Wrapper>
      <Header />
      <MessageWrapper>
        <Message>Finished packing?</Message>
        <AnimatedMessage>Get a Tour Guide!</AnimatedMessage>
      </MessageWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;
const MessageWrapper = styled.div`
  text-align: center;
  font-size: 70px;
  font-weight: 700;
  user-select: none;
`;
const Message = styled.p`
  color: #000;
  padding-top: 20px;
  margin: 20px;
`;
const Shine = keyframes`
  to {
      background-position: 200% center;
  }
`;
const AnimatedMessage = styled.p`
  font-size: 100px;
  display: inline;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 1) 0%,
    rgba(255, 185, 33, 1) 52%,
    rgba(0, 0, 0, 1)
  );
  background-size: 200% auto;

  color: #000;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  animation: ${Shine} 4s linear infinite;
`;

export default FirstView;
