import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Invitation from './Invitation';

const FirstView = () => {
  return (
    <Wrapper>
      <MessageWrapper>
        <Message>Finished packing?</Message>
        <PrimaryMessage>Get a Tour Guide!</PrimaryMessage>
        <Description>
          Come and lean Kyoto in a small group.
          <tr />
          Enjoy your trip with knowledge on a guided tour.
        </Description>
      </MessageWrapper>
      <Invitation />
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #a7ffeb;

  @media (max-width: 980px) {
    padding-top: 120px;
  }
`;
const MessageWrapper = styled.div`
  text-align: center;
  font-weight: 900;
  user-select: none;
`;
const Message = styled.p`
  color: #000;
  font-size: 72px;
  padding-top: 25px;
  margin: 0px;
`;
const PrimaryMessage = styled.p`
  font-size: 85px;
  margin: 0;
`;
const Description = styled.p`
  font-size: 22px;
`;

export default FirstView;
