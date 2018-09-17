import { connect } from 'react-redux';
import Detail from './Detail';

function mapStoreToProps(store) {
  return {
    searchQuery: store.search.searchQuery
  };
}

export default connect(mapStoreToProps)(Detail);
