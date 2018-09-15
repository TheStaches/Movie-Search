import { combineReducers } from 'redux';
import searchReducer from './containers/Search/searchReducer'

const rootReducer = combineReducers({
  search: searchReducer
});

export default rootReducer;
