import React from 'react';
import styled, { keyframes } from 'styled-components';
import BagImage from '../assets/travel-bag.png';
import AppStore from '../assets/appstore.svg';
import GooglePlay from '../assets/google-play-badge.png';

const FirstView = () => {
  return (
    <Wrapper>
      <MessageWrapper>
        <Message>Finished packing?</Message>
        <AnimatedMessage>Get a Tour Guide!</AnimatedMessage>
      </MessageWrapper>
      <DownloadWrapper>
        <DownloadIcon style={{ width: '24%' }} src={GooglePlay} alt="" />
        <DownloadIcon style={{ width: '19%' }} src={AppStore} alt="" />
      </DownloadWrapper>
      <ImageWrapper>
        <Image src={BagImage} />
      </ImageWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const MessageWrapper = styled.div`
  text-align: center;
  font-size: 65px;
  font-weight: 700;
  user-select: none;
`;
const Message = styled.p`
  color: #22c1c3;
  padding-top: 20px;
  margin: 20px;
`;
const Shine = keyframes`
  to {
      background-position: 200% center;
  }
`;
const AnimatedMessage = styled.p`
  font-size: 85px;
  display: inline;
  background: linear-gradient(
    to right,
    rgba(34, 193, 195, 1) 0%,
    rgba(253, 187, 45, 1) 52%,
    rgba(34, 193, 195, 1)
  );
  background-size: 200% auto;

  color: #000;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  animation: ${Shine} 3s linear infinite;
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
`;
const DownloadWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
`;
const DownloadIcon = styled.img``;

export default FirstView;
