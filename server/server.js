const net = require('net');
const fs = require('fs');
const generateBoard = require('../board-setup/generateBoard');

const server = net.createServer(socket => {
  console.log(`Successful connection from ${socket.remoteAddress}, port ${socket.remotePort}`);

  socket.on('data', buffer => {
    let request = buffer.toString('utf-8').trim();
    console.log(`Player: ${request}`);
    if (request === 'play') {
      let board = generateBoard();
      socket.write(board);
    }
  });

  socket.on('end', () => {
    console.log(`Closed ${socket.remoteAddress}, port ${socket.remotePort}`);
    process.exit();
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000...');
});