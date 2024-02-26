import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FavouriteQuizzes from '../../pages/FavouriteQuizzes/FavouriteQuizzes';
import CreateNewQuizz from '../../pages/CreateNewQuizz/CreateNewQuizz';

const QuizzesRoutes = () => (
	<Routes>
		<Route path='/favourite' element={<FavouriteQuizzes />} />
		<Route path='/create' element={<CreateNewQuizz />} />
	</Routes>
);

export default QuizzesRoutes;
