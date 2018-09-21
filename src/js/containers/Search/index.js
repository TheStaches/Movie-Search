import { connect } from 'react-redux';
import Search from './Search';

function mapStoreToProps(store) {
  return {
    movieInput: store.search.movieInput,
    searchQuery: store.search.searchQuery,
    totalResults: store.search.totalResults,
    movieTv: store.search.movieTv,
    activeButton: store.search.activeButton,
  };
}

export default connect(mapStoreToProps)(Search);
