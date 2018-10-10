import * as config from '../config.json';
import chalk from 'chalk';

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { StaticRouter } from 'react-router';

import path from 'path';
import express from 'express';

import { ServerStyleSheet } from 'styled-components'; 

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './public/reducers';

import App from './public/App';

import HTMLDocument from './HTMLDocument';

const store = createStore(allReducers);

const app = express();

app.use('/', express.static(path.resolve(__dirname, 'public')));

app.get('*', (req, res) => {

  const context = {};

  const sheet = new ServerStyleSheet();

  const appRenderedToString = ReactDOMServer.renderToString(
    
    sheet.collectStyles(

      <Provider store={store}>

        <StaticRouter location={req.url} context={context}>

          <App/>

        </StaticRouter>

      </Provider>
    )
  );

  const stylesRenderedToCSS = sheet.getStyleTags();

  if(context.url){
    res.writeHead(301, {
      Location: context.url
    })
    res.end();
  
  }else{

    res.header('Content-Type', 'text/html');
    res.write(new HTMLDocument({
      head: {
        title: config.info.name,
        styles: stylesRenderedToCSS, 
      },
      body: {
        root: appRenderedToString
      }
    }).getDocument());
    res.end();
  }
  
});


app.listen(config.port, () => {

  console.log(`
    [${chalk.hex('#FFD700').bold(config.info.name)} ${chalk.red(`(${config.version.number})`)} "${chalk.blue(config.version.name)}"]
    - Listening on port ${chalk.yellow(config.port)}
  `);

});
