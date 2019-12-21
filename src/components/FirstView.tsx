import React from 'react';
import styled from 'styled-components';
import BagImage from '../assets/travel-bag.png';
import AppStore from '../assets/appstore.svg';
import GooglePlay from '../assets/google-play-badge.png';

const FirstView = () => {
  return (
    <Wrapper>
      <TitleMessages>
        <Message>Finished packing?</Message>
        <Message>Get a Tour Guide.</Message>
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
  padding-top: 15px;
  text-align: center;
  font-style: italic;
  font-size: 65px;
  font-weight: 700;
  user-select: none;
`;
const Message = styled.p`
  margin: 20px;
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
`;
const DownloadWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 12px;
`;
const DownloadIcon = styled.img``;

export default FirstView;
