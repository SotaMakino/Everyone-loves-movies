import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <Wrapper>
      <Logo src={logo} alt="logo" />
      <Link>Contact</Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Logo = styled.img`
  width: 100px;
  margin-left: 30px;
`;
const Link = styled.div`
  margin: 35px 20px;
`;

export default Header;
