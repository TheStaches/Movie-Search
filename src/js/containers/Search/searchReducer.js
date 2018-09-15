const defaultState = {
  movieInput: '',
  movies: []
}

export default function searchReducer (state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'UPDATE_SEARCH_INPUT': {
      return {
        ...state,
        movieInput: payload.movieInput
      };
    }

    case 'SEARCH_MOVIE_FULFILLED': {
      console.log(payload)
      return {
        ...state,
        movies: payload.data.Search
      };
    }

    default: {
      return state;
    }
  }
}
