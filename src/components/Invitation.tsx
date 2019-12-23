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
        <ButtonTitle>JOIN MY FREE TRIAL</ButtonTitle>
      </ButtonWrapper>
    </InvitationWrapper>
  );
};

const InvitationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 70px;
`;
const ButtonWrapper = styled.a`
  display: inline-block;
  border-radius: 25px;
  margin: 20px 5px 0;
  padding: 10px 45px 0px;
  height: 80px;
  color: #000;
  background-color: #fa8c73;
  text-decoration: none;
`;
const IconImage = styled.img`
  width: 70px;
  vertical-align: middle;
  padding-right: 20px;
`;
const ButtonTitle = styled.span`
  font-size: 26px;
  font-weight: 900;
  vertical-align: middle;
`;
const Image = styled.img`
  width: 30%;
  margin-right: -60px;
  user-select: none;
  -webkit-user-drag: none;
`;

export default Invitation;
