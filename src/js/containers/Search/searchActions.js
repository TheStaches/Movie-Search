import axios from 'axios';

export function updateSearchInput(movieInput) {
  return {
    type: 'UPDATE_SEARCH_INPUT',
    payload: { movieInput }
  };
}

export function searchType(movieTv, activeButton) {
  return {
    type: 'UPDATE_SEARCH_TYPE',
    payload: { movieTv, activeButton }
  };
}

export function moreInfo(movieId, movieTv) {
  return {
    type: 'SEARCH_MORE_INFO',
    payload: axios.get(`https://www.omdbapi.com/?i=${movieId}&type=${movieTv}&plot=full&apikey=8730e0e`)
      .then(response => response.data)
  };
}

export function searchMovie(movieInput, movieTv) {
  return {
    type: 'SEARCH_MOVIE',
    payload: axios.get(`https://www.omdbapi.com/?s=${movieInput}&type=${movieTv}&apikey=8730e0e`)
      .then((searchRes) => {
        const imdbQueries = searchRes.data.Search.map((item) => {
          return axios.get(`https://www.omdbapi.com/?i=${item.imdbID}&apikey=8730e0e`);
        });
        return axios.all(imdbQueries).then((idRes) => {
          const searchMovies = searchRes.data.Search.map((item, index) => {
            return {
              ...item,
              ...idRes[index].data
            };
          });
          
          return { searchMovies, totalResultes: searchRes.data.totalResults };
        });
      })
  };
}
