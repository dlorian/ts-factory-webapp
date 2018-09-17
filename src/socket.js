const tsFactory = require('@dlorian/ts-factory');

const Socket = require('socket.io');

const registerSocket = (http) => {
    const io = Socket(http);
    io.on('connection', (socket) => {
        
        socket.on('ts-create', (options) => {
            try {
                console.log('Create timeseries for options {}', options);

                tsFactory.stream(options)
                    .on('data', data => socket.emit('ts-data', data))
                    .on('error', err => socket.emit('ts-error', err));
            } catch (err) {
                console.error('error occured while stream ts data', err);
                socket.emit('ts-error', err.message);
            }
        });
    });
};

module.exports = { registerSocket };