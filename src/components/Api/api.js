import axios from 'axios';


const KEY = '23b145ee574a18aa201c7296bc0e9b2b';
const DEFAULT_URL = 'https://api.themoviedb.org/3';
const BY_TRENDS = `${DEFAULT_URL}/trending/movie/week`;
const BY_SEARCH = `${DEFAULT_URL}/search/movie`;
const BY_ID = `${DEFAULT_URL}/movie/`;
const renderPoster = 'https://image.tmdb.org/t/p/w500';
export { KEY, DEFAULT_URL, BY_TRENDS, BY_SEARCH, BY_ID, renderPoster };

export async function fetchTrendMovies(page = 1) {
  try {
    const { data } = await axios.get(
      `${BY_TRENDS}?api_key=${KEY}&page=${page}&language=en`
    );
    return data.results;
  } catch (error) {}
}

//Fetch by Search
export async function fetchBySearchMovies(formInput, page = 1) {
  try {
    const { data } = await axios.get(
      `${BY_SEARCH}?api_key=${KEY}&query=${formInput}&page=${page}`
    );
    return data;
  } catch (error) {}
}

export async function fetchByID(id) {
  try {
    const { data } = await axios.get(`${BY_ID}${id}?api_key=${KEY}`);
    return data;
  } catch (error) {}
}

