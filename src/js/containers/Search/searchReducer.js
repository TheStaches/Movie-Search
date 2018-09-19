const defaultState = {
  movieInput: '',
  searchQuery: [],
  titleQuery: {}
};

export default function searchReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'UPDATE_SEARCH_INPUT': {
      return {
        ...state,
        movieInput: payload.movieInput
      };
    }

    case 'SEARCH_MOVIE_FULFILLED': {
      return {
        ...state,
        searchQuery: payload,
        movieInput: '',
      };
    }

    case 'SEARCH_MOVIE_REJECTED': {
      return state;
    }

    default: {
      return state;
    }
  }
}
