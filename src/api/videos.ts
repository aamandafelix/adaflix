import { API_URL } from '../config';

const VIDEOS_URL = `${API_URL}videos`;

function create(video: any) {
  return fetch(VIDEOS_URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(video),
  })
    .then(async (response) => {
      if (response.ok) {
        return 'ok';
      }

      throw new Error('API communication failed.');
    });
}

export default {
  create
};
