import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';

const applyMiddlewares = (store, listOfMiddlewares)=> {
  let dispatch = store.dispatch;
  listOfMiddlewares.forEach( middlewares => {
    dispatch = middlewares(store)(dispatch);
  });
  return Object.assign({}, store, {dispatch});
}


document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
  let store = configureStore(preloadedState);
  // store.dispatch = addLoggingToDispatch(store);
  // store = applyMiddlewares(store, [addLoggingToDispatch]);
  window.store = store;
  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
});
