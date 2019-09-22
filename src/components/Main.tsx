import React from 'react';
import styled from 'styled-components';
import bgPink from '../assets/bg-pink.jpg';

const Main = () => {
  return (
    <>
      <HeadingWrapper>
        <BackgroundImg>
          <SubWrapper>
            <Heading>The Future of Tourism</Heading>
            <SubTitle>
              Changing the concept of tourism, a new era is coming.
            </SubTitle>
          </SubWrapper>
        </BackgroundImg>
      </HeadingWrapper>

      <AboutWrapper>
        <Title>Potato, New Tour Guide Service</Title>
        <About>
          Traditional tour guides are expensive and taking a long time. Our
          guides are free to use anywhere and any time. Knowledgeable and
          experienced guides are on standby at popular spots. Use our guides to
          stop superficial sightseeing and make it meaningful at a low price.
        </About>
        <Slogan>“Catch our Guides to make your trip Rich.”</Slogan>
      </AboutWrapper>
    </>
  );
};

const HeadingWrapper = styled.div`
  height: 800px;
`;
const BackgroundImg = styled.div`
  background-image: url(${bgPink});
  background-attachment: fixed;
  background-size: 100%;
`;
const SubWrapper = styled.div`
  padding-top: 130px;
  height: 350px;
  text-align: center;
`;
const Heading = styled.h1`
  color: white;
  font-size: 65px;
  font-weight: 700;
`;
const SubTitle = styled.h2`
  font-size: 33px;
  color: white;
`;
const AboutWrapper = styled.div`
  margin: -220px 148px 0 148px;
  height: 400px;
`;
const Title = styled.h2`
  text-align: center;
  font-size: 40px;
`;
const About = styled.p`
  font-size: 20px;
  text-align: justify;
  text-justify: inter-ideograph;
`;
const Slogan = styled.p`
  padding-top: 50px;
  font-size: 25px;
  text-align: center;
`;

export default Main;
