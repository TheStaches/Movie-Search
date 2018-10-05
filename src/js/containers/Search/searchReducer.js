const defaultState = {
  movieInput: '',
  searchQuery: [],
  titleQuery: {},
  totalResults: '50',
  movieTv: 'movie',
  activeButton: true,
  animateInput: '',
  animateMovie: '',
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

    case 'UPDATE_SEARCH_TYPE': {
      return {
        ...state,
        movieTv: payload.movieTv,
        activeButton: !payload.activeButton,
      };
    }

    case 'SEARCH_MORE_INFO_FULFILLED': {
      return {
        ...state,
        moreInfo: payload
      };
    }

    case 'SEARCH_MORE_INFO_Rejected': {
      return {
        ...state,
        moreInfo: null,
      };
    }


    case 'SEARCH_MOVIE_FULFILLED': {
      return {
        ...state,
        searchQuery: payload.searchMovies,
        totalResults: payload.totalResults,
        animateInput: 'animateInput',
        animateMovie: 'animated fadeIn slow',
        movieInput: '',
      };
    }
    
    case 'SEARCH_MOVIE_PENDING': {
      return {
        ...state,
        animateMovie: '',
      };
    }

    case 'SEARCH_MOVIE_REJECTED': {
      return {
        ...state,
        searchQuery: null,
      };
    }

    default: {
      return state;
    }
  }
}
