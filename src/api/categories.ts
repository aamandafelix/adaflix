import { API_URL } from '../config';

const CATEGORIES_URL = `${API_URL}categorias`;

function getAll() {
  return fetch(CATEGORIES_URL)
    .then(async (response) => {
      if (response.ok) {
        const formatedResponse = await response.json();
        return formatedResponse;
      }

      throw new Error('API communication failed.');
    });
}

function getAllWithVideos() {
  return fetch(`${CATEGORIES_URL}?_embed=videos`)
    .then(async (response) => {
      if (response.ok) {
        const formatedResponse = await response.json();
        return formatedResponse;
      }

      throw new Error('API communication failed.');
    });
}

function create(cateogry: any) {
  return fetch(CATEGORIES_URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(cateogry),
  })
    .then(async (response) => {
      if (response.ok) {
        return 'ok';
      }

      throw new Error('API communication failed.');
    });
}

export default {
  getAll,
  getAllWithVideos,
  create
};
