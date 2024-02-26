import {
  Button,
  Card, CardContent, CardMedia, ThemeProvider, Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CustomizedCardActions } from './styled';
import { gray } from '../../styled';
import ModalWindow from '../ModalWindow/ModalWindow';
import QuizModal from '../QuizModal/QuizModal';

const QuizCard = ({ quiz }) => {
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpenModal = () => setModalIsOpen(true);
  const handleCloseModal = () => setModalIsOpen(false);

  const handleStartQuiz = () => {
    handleCloseModal();
    navigate(`/quiz/${quiz.id}`);
  };

  return (
    <Card sx={{ maxWidth: 230 }}>
      <CardMedia
        sx={{ height: 230 }}
        image={quiz.image}
        title={quiz.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {quiz.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {quiz.description}
        </Typography>
      </CardContent>
      <ThemeProvider theme={gray}>
        <CustomizedCardActions>
          <Button
            color='gray'
            variant="outlined"
            size="small"
            onClick={handleStartQuiz}
          >
            Start Quiz
          </Button>
          <Button
            color='gray'
            variant="contained"
            size="small"
            onClick={handleOpenModal}
          >
            Show More
          </Button>
        </CustomizedCardActions>
      </ThemeProvider>
      <ModalWindow
        isOpen={modalIsOpen}
        handleCloseModal={handleCloseModal}
      >
        <QuizModal quiz={quiz} handleStartQuiz={handleStartQuiz} />
      </ModalWindow>
    </Card>
  );
};

export default QuizCard;
