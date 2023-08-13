import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const KEY_API = '36612658-29e1993b7f5cae28e7421abef';

export const imagesFetch = async (img, page, perPage) => {
  const response = await axios.get(
    `/?key=${KEY_API}&q=${img}&image_type=photo&per_page=${perPage}&page=${page}`
  );
  //  if (response.ok) {
  //   return response.json();
  // }
  // return await Promise.reject(
  //   new Error(`Oops, some error. Please, try again later. Error: ${img}`)
  // );

  return response;
};