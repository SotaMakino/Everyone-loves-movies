import React from 'react';
import styled, { keyframes } from 'styled-components';
import BagImage from '../assets/travel-bag.png';
import AppStore from '../assets/appstore.svg';
import GooglePlay from '../assets/google-play-badge.png';
import Header from './Header';

const FirstView = () => {
  return (
    <Wrapper>
      <Header />
      <MessageWrapper>
        <Message>Finished packing?</Message>
        <AnimatedMessage>Get a Tour Guide!</AnimatedMessage>
      </MessageWrapper>
      <DownloadWrapper>
        <GoogleIcon src={GooglePlay} alt="" />
        <AppleIcon src={AppStore} alt="" />
      </DownloadWrapper>
      <ImageWrapper>
        <Image src={BagImage} />
      </ImageWrapper>
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
const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
  width: 41%;
  height: auto;
  margin-top: -120px;
  z-index: -1;
  user-select: none;

  @media (max-width: 980px) {
    width: 80%;
    margin-top: -150px;
  }
`;
const DownloadWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;

  @media (max-width: 980px) {
    flex-direction: column;
  }
`;
const GoogleIcon = styled.img`
  width: 24%;
  @media (max-width: 980px) {
    width: 57%;
  }
`;
const AppleIcon = styled.img`
  width: 19%;
  @media (max-width: 980px) {
    width: 50%;
  }
`;

export default FirstView;
