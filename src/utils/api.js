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

export const getActivities = () => {
  return winniesAPI
  .get('/activities')
  .then(({data}) => {
    return data
  })
}

export const postActivity = (location, activity, image) => {
  const postBody = {
    location: location,
    activity: activity,
    image: image
  }
    return winniesAPI
    .post('/activities', postBody)
}