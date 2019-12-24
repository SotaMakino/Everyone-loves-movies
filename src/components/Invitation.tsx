import React from 'react';
import styled from 'styled-components';

import KyotoImage from '../assets/kyoto.png';
import MessengerIcon from '../assets/Messenger_Logo_Color_RGB.png';

const Invitation = () => {
  return (
    <InvitationWrapper>
      <Image src={KyotoImage} alt="" />
      <ButtonWrapper href="http://m.me/sota.makino">
        <IconImage src={MessengerIcon} alt="" />
        <ButtonTitle>JOIN MY FREE TOUR</ButtonTitle>
      </ButtonWrapper>
    </InvitationWrapper>
  );
};

const InvitationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 80px;
`;
const Image = styled.img`
  width: 28%;
  margin-right: -55px;
  user-select: none;
  -webkit-user-drag: none;
`;
const ButtonWrapper = styled.a`
  color: #000;
  background-color: #fff;
  width: 30%;
  margin: 20px 10px 0;
  padding: 6px 12px 6px 22px;
  border: 3px solid #000;
  border-radius: 20px;
  text-decoration: none;

  @media (max-width: 980px) {
    width: 58%;
  }
`;
const IconImage = styled.img`
  width: 18%;
  text-align: center;
  vertical-align: middle;
  padding-right: 20px;
  margin: 5px;
  user-select: none;
  -webkit-user-drag: none;

  @media (max-width: 980px) {
    padding: 1% 5% 0 4%;
  }
`;
const ButtonTitle = styled.span`
  font-size: 2vw;
  font-weight: 700;
  vertical-align: middle;
  user-select: none;
  word-break: normal;

  @media (max-width: 980px) {
    font-size: 1.8vh;
  }
`;

export default Invitation;
