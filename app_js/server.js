const express = require('express');
const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

const app = express();

app.get('*', function (req, res) {
  // this is only for development, so re-read the file every time
  let template = fs.readFileSync(path.join(__dirname, 'index.html')).toString('utf-8');
  res.send(ejs.render(template, { webpackPort: process.env.WEBPACK_PORT || 8000 }));
});

const server = require('http').createServer(app);
const port = process.env.PORT || 3000;

server.listen(port, function () {
  console.log(`Server listening on ${port}, go to http://localhost:${port}/`);
});

require('./io')(server);
