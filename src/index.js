const path = require('path');

const express = require('express');
const app = express();

const DEFAULT = {
  _PORT: 8000
}

app.use(express.static(path.join(__dirname, 'public')));

app.listen(DEFAULT._PORT, ()=>{
  console.log(`Listening on port ${DEFAULT._PORT}...`)
})
