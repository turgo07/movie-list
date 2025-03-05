import axios from "axios";
import formatDate from "./format_date";

let API_KEY: string | undefined;

interface Movie {
    release_date: string;
}

// Obtém a chave da API TMDb
async function loadApiKey() {
  try {
    const response = await fetch('http://localhost:3000/src');
    const config = await response.json();
    API_KEY = config.API_KEY;
  } catch (error) {
    console.error('erro: ', error);
  }
}

loadApiKey();

async function fetchMovies(movie: string) {
  if (!API_KEY) {
    console.error('API_KEY não está carregada!');
    return;
  }

  const API_URL = `https://api.themoviedb.org/3/search/movie?query=${movie}`;

  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    const movies: Movie[] = response.data.results
    if (movies.length > 0)
        movies.map((movie) => movie.release_date = formatDate(movie.release_date))
    return response.data.results;

  } catch (error) {
    console.error("Erro na requisição:", error);
    return error
  }
}

export default fetchMovies;
