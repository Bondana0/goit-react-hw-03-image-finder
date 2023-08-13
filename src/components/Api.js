import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const KEY_API = '34395621-a4ae5341feaa95111ecdda581';

export const imagesFetch = async (img, page, perPage) => {
  const response = await axios.get(
    `/?key=${KEY_API}&q=${img}&image_type=photo&per_page=${perPage}&page=${page}`
  );
   if (response.ok) {
    return response.json();
  }
  // return await Promise.reject(
  //   new Error(`Oops, some error. Please, try again later. Error: ${img}`)
  // );

  return response;
};