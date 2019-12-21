import React from 'react';
import styled, { keyframes } from 'styled-components';
import BagImage from '../assets/travel-bag.png';
import AppStore from '../assets/appstore.svg';
import GooglePlay from '../assets/google-play-badge.png';

const FirstView = () => {
  return (
    <Wrapper>
      <TitleMessages>
        <Message>Finished packing?</Message>
        <AnimatedMessage>Get a Tour Guide!</AnimatedMessage>
      </TitleMessages>
      <DownloadWrapper>
        <DownloadIcon style={{ width: '220px' }} src={AppStore} alt="" />
        <DownloadIcon
          style={{ width: '253px', height: '108px' }}
          src={GooglePlay}
          alt=""
        />
      </DownloadWrapper>
      <ImageWrapper>
        <Image src={BagImage} />
      </ImageWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const TitleMessages = styled.div`
  text-align: center;
  font-size: 65px;
  font-weight: 700;
  user-select: none;
`;
const Message = styled.p`
  color: #006591;
  padding-top: 15px;
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
    rgba(0, 101, 145, 1) 0%,
    rgba(77, 170, 228, 1) 52%,
    rgba(0, 101, 145, 1)
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
