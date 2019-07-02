import { createStore } from 'redux';
import { composeWithDevtools } from 'redux-devtools-extension';
import mainReducer from './main-reducer';

export default () => {
  const store = createStore(mainReducer, composeWithDevtools);
  return store;
};
