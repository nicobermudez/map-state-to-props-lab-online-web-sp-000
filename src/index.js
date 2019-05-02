import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'react-redux'
import App from './App'
import manageUsers from './reducers/manageUsers'




ReactDOM.render(
  <Provider store={store}>
  <App />
  // add imports and code
  ,
  document.getElementById('root')
);
