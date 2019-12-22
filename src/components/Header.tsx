import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <Wrapper>
      <Logo>Potato</Logo>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 5px;
  font-size: 20px;
  font-weight: 500;
`;
const Logo = styled.p`
  color: #000;
  font-weight: 800;
  font-size: 30px;
  width: 100px;
  margin-left: 30px;
  user-select: none;

  @media (max-width: 980px) {
    font-size: 60px;
    padding-top: 50px;
  }
`;

export default Header;
