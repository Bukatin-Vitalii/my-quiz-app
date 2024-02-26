import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import quizzesApi from '../../api/services/quizzes';
import QuizCard from '../../components/QuizCard/QuizCard';
import { ErrorText, QuizzesWrapper } from './styled';
import { Loader } from '../../styled';

const Quizzes = ({ onApiError, searchValue }) => {
  const [quizzes, setQuizzes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchQuizzes = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await quizzesApi.fetch(onApiError);
      setQuizzes(response);
    } catch (error) {
      onApiError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, [onApiError]);

  useEffect(() => {
    fetchQuizzes();
  }, [fetchQuizzes]);

  const filteredQuizzes = useMemo(() => {
    if (searchValue) {
      return quizzes.filter((quiz) => quiz.title.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1);
    }
    return quizzes;
  }, [quizzes, searchValue]);

  if (isLoading) {
    return <Loader color="inherit" />;
  }

  return (
    <QuizzesWrapper>
      {quizzes && quizzes.length > 0 ? (
        filteredQuizzes.map((quiz) => (
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
