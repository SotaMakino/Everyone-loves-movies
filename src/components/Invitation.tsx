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
  margin-right: 70px;
`;
const ButtonWrapper = styled.a`
  color: #000;
  background-color: #fff;
  margin: 20px 5px 0;
  padding: 5px 37px 5px;
  line-height: 77px;
  border: 3px solid #000;
  border-radius: 20px;
  text-decoration: none;
`;
const IconImage = styled.img`
  width: 70px;
  vertical-align: middle;
  padding-right: 20px;
  user-select: none;
  -webkit-user-drag: none;
`;
const ButtonTitle = styled.span`
  font-size: 27px;
  font-weight: 900;
  vertical-align: middle;
  user-select: none;
`;
const Image = styled.img`
  width: 30%;
  margin-right: -60px;
  user-select: none;
  -webkit-user-drag: none;
`;

export default Invitation;
