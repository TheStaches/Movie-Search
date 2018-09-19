import { connect } from 'react-redux';
import Search from './Search';

function mapStoreToProps(store) {
  return {
    movieInput: store.search.movieInput,
    searchQuery: store.search.searchQuery,
    titleQuery: store.search.titleQuery,
  };
}

export default connect(mapStoreToProps)(Search);
