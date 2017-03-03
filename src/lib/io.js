// DOCS: https://github.com/balderdashy/sails.io.js

const io = require('sails.io.js')(require('socket.io-client'));
io.sails.url = 'http://localhost:1337';

export default io;
