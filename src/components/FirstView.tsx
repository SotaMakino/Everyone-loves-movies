import React from 'react';
import styled from 'styled-components';
import BagImage from '../assets/travel-bag.png';
import AppStore from '../assets/appstore.svg';
import GooglePlay from '../assets/google-play-badge.png';

const FirstView = () => {
  return (
    <Wrapper>
      <TitleMessages>
        <Message>Packing finished?</Message>
        <GuideWrapper>Get a Tour Guide.</GuideWrapper>
        <DownloadWrapper>
          <DownloadIcon style={{ width: '220px' }} src={AppStore} alt="" />
          <DownloadIcon style={{ width: '253px' }} src={GooglePlay} alt="" />
        </DownloadWrapper>
      </TitleMessages>
      <ImageWrapper>
        <Image src={BagImage} />
      </ImageWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const TitleMessages = styled.div`
  padding-top: 30px;
  text-align: center;
  font-style: italic;
  font-size: 60px;
  font-weight: 700;
`;
const Message = styled.p`
  margin: 20px;
`;
const GuideWrapper = styled.p`
  display: inline;
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
  margin-top: -50px;
  z-index: -1;
`;
const DownloadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
`;
const DownloadIcon = styled.img``;

export default FirstView;
