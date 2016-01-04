'use strict';
const dotenv = require('dotenv').load();

const Hapi = require('hapi');
const server = new Hapi.Server();

server.connection({port: process.env.PORT || 3000});
server.route({
  path: '/',
  method: 'GET',
  handler: function(req, res) {
    res('Hello World');
  }
});
server.start(() => {
  console.log('Server is running at: '+ server.info.uri);
});
