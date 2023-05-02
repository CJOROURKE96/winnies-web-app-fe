import axios from 'axios';

const winniesAPI = axios.create({
  baseURL: 'https://winnies-web-app.onrender.com/api',
});

export const getWinnie = () => {
  return winniesAPI
  .get('/winnie')
  .then(({data}) => {
    return data
  })
}