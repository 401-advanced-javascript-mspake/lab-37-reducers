import { combineReducers } from 'redux';
import bookReducer from './book-reducer';
import bookshelfReducer from './bookshelf-reducer';

export default combineReducers({
  book: bookReducer,
  bookshelf: bookshelfReducer,
});
