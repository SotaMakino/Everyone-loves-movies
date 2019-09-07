import React from 'react';
import styled from 'styled-components';
import bgGreen from '../assets/bg-pink.jpg';

const Main = () => {
  return (
    <>
      <HeadingWrapper>
        <BackgroundImg>
          <SubWrapper>
            <Heading>Completely New Tourism</Heading>
            <SubTitle>
              Changing the concept of tourism, a new era is coming
            </SubTitle>
          </SubWrapper>
        </BackgroundImg>
      </HeadingWrapper>

      <AboutWrapper>
        <Title>Potato</Title>
        <About>about</About>
      </AboutWrapper>
    </>
  );
};

const HeadingWrapper = styled.div`
  height: 700px;
`;
const BackgroundImg = styled.div`
  background-image: url(${bgGreen});
  background-attachment: fixed;
  width: 100%;
  height: 67.3%;
`;
const SubWrapper = styled.div`
  text-align: center;
  padding-top: 180px;
`;
const Heading = styled.h1`
  color: white;
`;
const SubTitle = styled.h2`
  color: white;
`;
const AboutWrapper = styled.div`
  margin-top: -200px;
  height: 400px;
`;
const Title = styled.h2``;
const About = styled.p``;

export default Main;
