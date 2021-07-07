import React from 'react';
import styled from 'styled-components';
import WantedLogo from "../../res/wanted_logo.png"

const Logo = () => {
  return (
    <LogoImage src={WantedLogo} />
  );
};
export default Logo;

const LogoImage = styled.img`
  height: 17px;
`;