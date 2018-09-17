import { connect } from 'react-redux';
import Detail from './Detail';

function mapStoreToProps(store) {
  return {
    titleQuery: store.search.titleQuery
  };
}

export default connect(mapStoreToProps)(Detail);
