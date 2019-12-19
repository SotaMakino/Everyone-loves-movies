import React from 'react';
import styled from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import logo from '../assets/potato-logo.png';

const Header: React.SFC = () => {
  const [isCopied, setIsCopied] = React.useState<boolean>(false);
  const handleClick = React.useCallback(() => {
    setIsCopied(!isCopied);
  }, []);

  return (
    <Wrapper>
      <Logo src={logo} alt="logo" />
      {isCopied ? <Popup>Email Copied!</Popup> : null}
      <LinkWrapper>
        <CopyToClipboard text="sm96kyoto@gmail.com" onCopy={handleClick}>
          <span>Contact</span>
        </CopyToClipboard>
      </LinkWrapper>
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
const Logo = styled.img`
  width: 100px;
  margin-left: 30px;
`;
const LinkWrapper = styled.div`
  margin: 35px 20px;
  user-select: none;
`;
const Popup = styled.div`
  line-height: 36px;
  margin-top: 28px;
  margin-left: auto;
  width: 120px;
  height: 40px;
  text-align: center;
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  background: #ff8e9d;
  border-radius: 40px;
`;

export default Header;
