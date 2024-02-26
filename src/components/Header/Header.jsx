import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  HeaderWrapper, CustomizedLogo, Title,
  HeaderContainer,
  HeaderLogoGroup,
} from './styled';
import logo from '../../assets/svg/logo.svg';

const Header = () => {
  const navigateToHome = useNavigate();

  const handleClick = () => {
    navigateToHome('/quizzes');
  };

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderLogoGroup onClick={handleClick}>
          <CustomizedLogo src={logo} alt="logo" />
          <Title>EasyQuizzy</Title>
        </HeaderLogoGroup>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
