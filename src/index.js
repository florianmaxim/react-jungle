import path from 'path';

import express from 'express';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter, Route } from 'react-router';

import App from './public/App';

const app = express();

const DEFAULT = {
  _PORT: 8000
}

//If it there is anything serveable in here: serve it.
//Note: If the index route doesn't work look if there's an index file in here...
app.use('/', express.static(path.resolve(__dirname, 'public')));

app.get('*', (req, res) => {

  const context = {}

  const html = ReactDOMServer.renderToString(
    <StaticRouter
      location={req.url}
      context={context}
    >
      <App/>
    </StaticRouter>
  )

  if (context.url) {
    res.writeHead(301, {
      Location: context.url
    })
    res.end()
  } else {
    res.write(`<!doctype html><html><head></heady><body><div id="app">${html}</div><script src="/vendor.js"></script><script src="/bundle.js"></script></body></html>`)
    res.end()
  }
})

app.listen(DEFAULT._PORT, ()=>{
  console.log(`Listening on port ${DEFAULT._PORT}...`)
})
