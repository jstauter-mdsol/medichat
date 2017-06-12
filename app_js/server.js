const express = require('express');
const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

const app = express();

app.get('*', function (req, res) {
  // this is only for development, so re-read the file every time
  let template = fs.readFileSync(path.join(__dirname, 'index.html')).toString('utf-8');
  res.send(ejs.render(template, {webpackPort: process.env.WEBPACK_PORT || 8000}));
});

let port = process.env.PORT || 3000;

app.listen(3000, function () {
  console.log(`Server listening on ${port}, go to http://localhost:${port}/`);
});
