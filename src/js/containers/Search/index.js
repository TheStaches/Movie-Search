import { connect } from 'react-redux';
import Search from './Search';

function mapStoreToProps(store) {
  return {
    movieInput: store.search.movieInput,
    searchQuery: store.search.searchQuery,
    totalResults: store.search.totalResults,
    searchType: store.search.searchType,
  };
}

export default connect(mapStoreToProps)(Search);
