import axios from 'axios';

export default axios.create({
  baseURL: 'https://65b432a9770d43aba47b046f.mockapi.io/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});
