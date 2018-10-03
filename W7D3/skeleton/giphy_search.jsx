import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
// import { fetchSearchGiphys } from './util/api_util';
import giphySearchContainer from './components/giphys_search_container';
import { receiveSearchGiphys } from './actions/giphy_actions.js';
import { fetchSearchGiphys } from './actions/giphy_actions.js'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();


  //Testing
  window.store = store;
  window.receiveSearchGiphys = receiveSearchGiphys;
  window.fetchSearchGiphys = fetchSearchGiphys;

  ReactDOM.render(<Root store={store} />, root);
})
