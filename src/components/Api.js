const URL = 'https://pixabay.com/api';
const KEY = '36612658-29e1993b7f5cae28e7421abef';

const images = async (img, page = 1) => {
  const response = await fetch(
    `${URL}/?key=${KEY}&image_type=photo&q=${img}&page=${page}&orientation=horizontal&per_page=12`
  );
  if (response.ok) {
    return response.json();
  }
  return await Promise.reject(
    new Error(`Oops, some error. Please, try again later. Error: ${img}`)
  );
};

const api = {
  images,
};

export default api;
