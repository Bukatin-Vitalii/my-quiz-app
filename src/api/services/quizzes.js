import axios from '../service';

const quizzesApi = {
  fetch: (errorCallback) => axios.get('/quizzes')
    .then(({ data, status, statusText }) => {
      if (status > 399) {
        throw new Error(statusText);
      }
      return data;
    })
    .catch((error) => {
      errorCallback(error);
    }),
};

export default quizzesApi;
