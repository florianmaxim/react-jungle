import React from 'react';

import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';

import {Provider} from 'react-redux';

import store from './store';

import App from './App';

const renderMethod = !!module.hot ? ReactDOM.render : ReactDOM.hydrate;

renderMethod((

  <Provider store={store}>

    <BrowserRouter>

      <App/>

    </BrowserRouter>

  </Provider>

), document.getElementById('root'));

if(module.hot) {
   module.hot.accept();
}