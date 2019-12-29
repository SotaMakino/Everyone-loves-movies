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
<<<<<<< HEAD
          Come and lean Kyoto in a small group. Enjoy your trip with knowledge
          on a guided tour.
=======
          Come and learn Kyoto in a small group.
          <tr />
          Enjoy your trip with knowledge on a guided tour.
>>>>>>> a60656761dca94b4541412c0333459c3b45fd16c
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
  font-size: 4vmax;
  padding-top: 25px;
  margin: 0px;
`;
const PrimaryMessage = styled.p`
  font-size: 5vmax;
  margin: 0;
`;
const Description = styled.p`
  font-size: 2vmax;
  padding: 0 300px;

  @media (max-width: 980px) {
    padding: 0 150px;
  }
`;

export default FirstView;
