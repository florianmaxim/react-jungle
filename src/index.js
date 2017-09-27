import path from 'path';

import express from 'express';

import React from 'react';
import {renderToString, renderToStaticMarkup} from 'react-dom/server';
import { StaticRouter, Route } from 'react-router';

import Routes from './public/Routes';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './public/reducers';

const store = createStore(allReducers);

const app = express();

import Document from './Document';

import * as config from '../config.json';

app.use('/', express.static(path.resolve(__dirname, 'public')));

app.get('*', (req, res) => {

  const context = {};

  const html = renderToString(
    <Provider store={store}>
      <StaticRouter
        location={req.url}
        context={context}
      >
        <Routes/>

      </StaticRouter>
    </Provider>
  );

  if (context.url) {
    res.writeHead(301, {
      Location: context.url
    });
    res.end();
  } else {
    res.write(new Document({html:html, scripts: config.scripts, title: config.title}).get());
    res.end();
  }
});

app.listen(config.port, ()=>{
  console.log(`Listening on port ${config.port}...`);
});
