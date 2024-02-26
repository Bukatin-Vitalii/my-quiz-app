import React, { useCallback, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Templates from './components/Templates/Templates';
import Toast from './components/Toast/Toast';
import NotFound from './pages/NotFound/NotFound';
import Quizzes from './pages/Quizzes/Quizzes';
import QuizzesRoutes from './components/Routes/QuizzesRoutes';
import Quiz from './pages/Quiz/Quiz';

function App() {
  const [error, setError] = useState(null);
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleApiError = useCallback((error) => {
    setError(error.message || error);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<NotFound />} />
        <Route element={<Templates handleInputChange={handleInputChange} />}>
          <Route
            path='/quizzes'
            element={<Quizzes
              onApiError={handleApiError}
              searchValue={searchValue} />}
          />
          <Route
            path='/quizzes/*'
            element={<QuizzesRoutes />}
          />
          <Route
            path='/quiz/:quizId'
            element={<Quiz
              onApiError={handleApiError} />}
          />
        </Route>
      </Routes>
      <Toast error={error} onClose={() => setError(null)} />
    </BrowserRouter>
  );
}

export default App;
