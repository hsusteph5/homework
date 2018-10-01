import React from 'react';
import ReactDOM from 'react-dom';
import Widget from './components/widget';
import store from './store';

window.store = store;
// window.setLocation = setLocation;


document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(<Widget store={store} />, document.getElementById('root'));
});
