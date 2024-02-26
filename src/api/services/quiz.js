import axios from '../service';

const quizApi = {
  fetch: (errorCallback, id) => axios.get(`/quizzes/${id}`)
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

export default quizApi;
