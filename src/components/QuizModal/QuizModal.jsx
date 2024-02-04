import React from 'react';
import { Button, ThemeProvider } from '@mui/material';
import {
  QuizModalContent, QuizModalDescription, QuizModalImage, QuizModalTitle,
  QuizModalWrapper,
} from './styled';
import { gray } from '../../styled';

const QuizModal = ({ quiz, handleStartQuiz }) => (
  <QuizModalWrapper>
    <QuizModalImage src={quiz.image} alt={quiz.title} />
    <QuizModalContent>
      <QuizModalTitle>
        {quiz.title}
      </QuizModalTitle>
      <QuizModalDescription>
        {quiz.fullDescription}
      </QuizModalDescription>
      <QuizModalDescription>
        Quiz has {quiz.questions.length} questions.
        Estimated time to complete this quiz is {quiz.questions.length * 2} minutes.
      </QuizModalDescription>
      <ThemeProvider theme={gray}>
        <Button
          color='gray'
          variant="contained"
          size="large"
          onClick={handleStartQuiz}
        >
          Start Quiz
        </Button>
      </ThemeProvider>
    </QuizModalContent>
  </QuizModalWrapper>
);

export default QuizModal;
