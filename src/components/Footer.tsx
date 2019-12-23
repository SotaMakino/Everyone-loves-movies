import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Wrapper>
      <Copyright>© Potato Inc. / Illustration by Michael Norris.</Copyright>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 10px;
  color: #888;
`;
const Copyright = styled.h4`
  text-align: center;
  margin: 0;
`;

export default Footer;
