require('dotenv').config({ path: '..' });

const express = require('express');
const app = express();
const http = require('http').Server(app);

const socket = require('./socket.js');

const port = process.env.port || 3000;

app.use(express.static(__dirname + '/app'));

socket.registerSocket(http);

http.listen(port, () => console.log(`ts-factory-webapp is listening on localhost:${port}`));