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
        <DownloadIcon style={{ width: '253px' }} src={GooglePlay} alt="" />
      </DownloadWrapper>
      <ImageWrapper>
        <Image src={BagImage} />
      </ImageWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const TitleMessages = styled.div`
  padding-top: 10px;
  text-align: center;
  font-style: italic;
  font-size: 60px;
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
  width: 40%;
  height: auto;
  margin-top: -60px;
  z-index: -1;
`;
const DownloadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 15px;
`;
const DownloadIcon = styled.img``;

export default FirstView;
