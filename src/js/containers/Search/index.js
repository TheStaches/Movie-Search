import { connect } from 'react-redux';
import Search from './Search';

function mapStoreToProps(store) {
  return {
    movieInput: store.search.movieInput,
    searchQuery: store.search.searchQuery,
    totalResults: store.search.totalResults,
    movieTv: store.search.movieTv,
    activeButton: store.search.activeButton,
    animateInput: store.search.animateInput,
    animateMovie: store.search.animateMovie,
  };
}

export default connect(mapStoreToProps)(Search);
