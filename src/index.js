import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';


import App from './app';
import createStore from './redux/create-store';

const store = createStore();

ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.getElementById('root'));
