const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const tsFactory = require('@dlorian/ts-factory');

app.use(express.static('app'));

io.on('connection', (socket) => {
    socket.on('ts-create', (options) => {
        try {
            console.log('Create timeseries for options {}', options);
            
            tsFactory.stream(options)
                .on('data', data => socket.emit('ts-data', data))
                .on('error', err =>  socket.emit('ts-error', err));
        } catch (err) {
            console.error('error occured while stream ts data', err);
            socket.emit('ts-error', err.message);
        }
    });
});

http.listen(3000, () =>  console.log('ts-factory-webapp is listening on *:3000'));