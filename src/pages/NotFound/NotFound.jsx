import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, NotFoundWrapper } from './styled';

const NotFound = () => {
  const navigateToHome = useNavigate();

  const handleClick = () => {
    navigateToHome('/quizzes');
  };

  return (
    <NotFoundWrapper>
      <h1>Page not found :(</h1>
      <Button type="button" onClick={handleClick}>
        Go to home page
      </Button>
    </NotFoundWrapper>
  );
};

export default NotFound;
