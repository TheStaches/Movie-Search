import { connect } from 'react-redux';
import Search from './Search';

function mapStoreToProps(store) {
  return {
    movieInput: store.search.movieInput,
    movies: store.search.movies
  };
}

export default connect(mapStoreToProps)(Search);
