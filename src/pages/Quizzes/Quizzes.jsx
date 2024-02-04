import React, { useCallback, useEffect, useState } from 'react';
import quizzesApi from '../../api/services/quizzes';
import QuizCard from '../../components/QuizCard/QuizCard';
import { ErrorText, QuizzesWrapper } from './styled';

const Quizzes = ({ onApiError }) => {
  const [quizzes, setQuizzes] = useState([]);

  const fetchQuizzes = useCallback(async () => {
    try {
      const response = await quizzesApi.fetch(onApiError);
      setQuizzes(response);
    } catch (error) {
      onApiError(error.message);
    }
  }, [onApiError]);

  useEffect(() => {
    fetchQuizzes();
  }, [fetchQuizzes]);

  return (
    <QuizzesWrapper>
      {quizzes && quizzes.length > 0 ? (
        quizzes.map((quiz) => (
          <QuizCard key={quiz.id} quiz={quiz} />
        ))
      ) : (
        <ErrorText>
          Sorry! :(
          <br></br>
          No quizzes available.
          <br></br>
          try to reload the page...
        </ErrorText>
      )}
    </QuizzesWrapper>
  );
};

export default Quizzes;
