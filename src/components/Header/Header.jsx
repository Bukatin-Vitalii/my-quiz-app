import React from 'react';
import {
  HeaderWrapper, CustomizedLogo, Title,
  HeaderContainer,
} from './styled';
import logo from '../../assets/svg/logo.svg';

const Header = () => (
  <HeaderWrapper>
    <HeaderContainer>
      <CustomizedLogo src={logo} alt="logo" />
      <Title>EasyQuizzy</Title>
    </HeaderContainer>
  </HeaderWrapper>
);

export default Header;
