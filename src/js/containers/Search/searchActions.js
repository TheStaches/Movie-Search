// const API = `http://www.omdbapi.com/?t=${movieTitle}apikey=8730e0e&`

import axios from 'axios';

export function updateSearchInput(movieInput) {
  return {
    type: 'UPDATE_SEARCH_INPUT',
    payload: { movieInput }
  }
}

export function searchMovie(movieInput) {
  return {
    type: 'SEARCH_MOVIE',
    payload: axios.get(`http://www.omdbapi.com/?s=${movieInput}&apikey=8730e0e`)
    // {
    //   searchQuery: axios.get(`http://www.omdbapi.com/?s=${movieInput}&apikey=8730e0e`),
    //   titleQuery: axios.get(`http://www.omdbapi.com/?t=${movieInput}&apikey=8730e0e`)
    // }
  }
}
