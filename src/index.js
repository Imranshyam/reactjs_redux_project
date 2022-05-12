import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './index.css';
import 'font-awesome/css/font-awesome.min.css';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';


ReactDOM.render(
  <Provider store ={store}>
  <App/>
  </Provider>
  ,document.getElementById('root'));
