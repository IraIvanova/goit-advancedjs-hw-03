import axios from 'axios';

const API_KEY = '57978423-e1008c624701cdcff1b93f2bb';
const API_URL = 'https://pixabay.com/api/';

function getImagesByQuery(query) {
  const searchParams = {
    key: API_KEY,
    q: query,
    orientation: 'horizontal',
    safesearch: true,
  };

  return axios.get(API_URL, {
    params: searchParams,
  })
    .then(resp => resp.data);
}

export default getImagesByQuery;