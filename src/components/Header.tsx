import React from 'react';
import styled from 'styled-components';
import logo from '../assets/potato-logo.png';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Header = () => {
  const [isCopied, setIsCopied] = React.useState<boolean>(false);

  return (
    <Wrapper>
      <Logo src={logo} alt="logo" />
      {isCopied ? <Popup>Email Copied!</Popup> : null}
      <Link>
        <CopyToClipboard
          text="sm96kyoto@gmail.com"
          onCopy={() => setIsCopied(true)}
        >
          <span>Contact</span>
        </CopyToClipboard>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 5px;
`;
const Logo = styled.img`
  width: 100px;
  margin-left: 30px;
`;
const Link = styled.div`
  margin: 35px 20px;
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
  background: #ff8e9d;
  border-radius: 40px;
`;

export default Header;
