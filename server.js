const express = require('express');
const http = require('http');
const path = require('path');
const logger = require('morgan');
require('colors');

const server = express();
const port = process.env.PORT || 8080;

server.use(logger('dev'));
server.use(express.static(path.join(__dirname, '')));

server.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

server.get('/rooms/:id', (req, res) => {
  res.sendFile(__dirname + '/room.html');
});

http.createServer(server).listen(port, () => {
  console.log(`Server ready and listening on port: ${port}`.green);
});
