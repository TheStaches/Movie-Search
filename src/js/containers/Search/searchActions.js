import axios from 'axios';

export function updateSearchInput(movieInput) {
  return {
    type: 'UPDATE_SEARCH_INPUT',
    payload: { movieInput }
  };
}

export function searchMovie(movieInput) {
  return {
    type: 'SEARCH_MOVIE',
    payload: axios.get(`https://www.omdbapi.com/?s=${movieInput}&apikey=8730e0e`)
      .then((response) => {
        const imdbQueries = response.data.Search.map((item) => {
          return axios.get(`https://www.omdbapi.com/?i=${item.imdbID}&apikey=8730e0e`)
        });
        return axios.all(imdbQueries).then((res) => {
          const boundQuery = response.data.Search.map((item, index) => {
            return {
              ...item,
              ...res[index].data
            };
          });
          return boundQuery;
        });
      })
  };
}
