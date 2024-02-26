import React, {
  useCallback, useEffect,
  useMemo,
  useState,
} from 'react';
import { useParams } from 'react-router-dom';
import { Button, ThemeProvider } from '@mui/material';
import {
  QuizContent, QuizDescription, QuizImage, QuizBottomWrapper, QuizTimer, QuizTitle,
  QuizTopWrapper,
  QuizResult,
  QuizResultValue,
  QuizResultGroup,
} from './styled';
import { Loader, gray } from '../../styled';
import quizApi from '../../api/services/quiz';
import QuizQuestion from '../../components/QuizQuestion/QuizQuestion';

const Quiz = ({ onApiError }) => {
  const { quizId } = useParams();
  const [quiz, setQuiz] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);

  const fetchQuiz = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await quizApi.fetch(onApiError, quizId);
      setQuiz(response);
    } catch (error) {
      onApiError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, [onApiError, quizId]);

  useEffect(() => {
    fetchQuiz();
  }, [fetchQuiz]);

  useEffect(() => {
    let timer;
    if (quizStarted) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [quizStarted]);

  const questionsCount = useMemo(() => quiz.questions?.length || 0, [quiz.questions]);
  const timeToComplete = useMemo(() => questionsCount * 2 * 60, [questionsCount]);

  const handleStartQuiz = () => {
    setQuizStarted(true);
    setTimeLeft(timeToComplete);
  };

  const confirmAnswer = (isCorrect) => {
    if (isCorrect) {
      setCorrectAnswersCount((prevCount) => prevCount + 1);
    }
    if (currentQuestion < questionsCount - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizStarted(false);
      setQuizCompleted(true);
    }
  };

  if (isLoading) {
    return <Loader color="inherit" />;
  }

  if (quizCompleted) {
    const elapsedTime = timeToComplete - timeLeft;
    const remainingTime = timeLeft;
    const accuracy = (correctAnswersCount / questionsCount) * 100;

    return (
      <>
        <QuizTopWrapper style={{ justifyContent: 'center' }}>
          <QuizImage src={quiz.image} alt={quiz.title} />
        </QuizTopWrapper >
        <QuizBottomWrapper>
          <QuizContent>
            <QuizTitle>
              Quiz completed!
            </QuizTitle>
            <QuizResult>
              <QuizResultGroup>
                Correct answers: <QuizResultValue>{correctAnswersCount} / {questionsCount}</QuizResultValue>
              </QuizResultGroup>
              <QuizResultGroup>
                Elapsed time: <QuizResultValue>
                  {Math.floor(elapsedTime / 60)}:{(`0${elapsedTime % 60}`).slice(-2)}min.
                </QuizResultValue>
              </QuizResultGroup>
              <QuizResultGroup>
                Remaining time: <QuizResultValue>
                  {Math.floor(remainingTime / 60)}:{(`0${remainingTime % 60}`).slice(-2)}min.
                </QuizResultValue>
              </QuizResultGroup>
              <QuizResultGroup>
                Accuracy: <QuizResultValue>{accuracy.toFixed(2)}%</QuizResultValue>
              </QuizResultGroup>
            </QuizResult>
          </QuizContent>
        </QuizBottomWrapper>
      </>
    );
  }

  return (
    <>
      <QuizTopWrapper style={{ justifyContent: quizStarted ? 'center' : 'initial' }}>
        <QuizImage src={quiz.image} alt={quiz.title} />
        {quizStarted ? null
          : (<QuizContent>
            <QuizTitle>
              {quiz.title}
            </QuizTitle>
            <QuizDescription>
              {quiz.fullDescription}
            </QuizDescription>
            <QuizDescription>
              Questions: {questionsCount}
              <br />
              Time to complete: {timeToComplete / 60}min.
            </QuizDescription>
            <ThemeProvider theme={gray}>
              <Button
                color='gray'
                variant="contained"
                size="large"
                onClick={handleStartQuiz}
                disabled={quizStarted}
              >
                Start Quiz
              </Button>
            </ThemeProvider>
          </QuizContent>)
        }
      </QuizTopWrapper>
      <QuizBottomWrapper>
        {quizStarted ? (
          <>
            <QuizTimer>{Math.floor(timeLeft / 60)}:{(`0${timeLeft % 60}`).slice(-2)}</QuizTimer>
            <QuizQuestion
              questionCount={currentQuestion}
              questionGroup={quiz.questions[currentQuestion]}
              confirmAnswer={confirmAnswer}
            />
          </>
        ) : null
        }
      </QuizBottomWrapper>
    </>
  );
};

export default Quiz;
