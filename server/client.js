const net = require('net');
const readline = require('readline');
const fs = require('fs');

const conn = new net.Socket();

conn.connect(3000, 'localhost', () => {
  console.log('Connected to server...');
  console.log("Welcome to Battleship! Enter 'play' to start game...");
});

conn.on('data', data => {
  const board = data.toString('utf-8');
  console.log(board);
});

conn.on('end', () => {
  console.log('Server has closed connection');
  process.exit();
});

const rl = readline.createInterface({ input: process.stdin });

rl.on('line', line => {
  conn.write(`${line}\n`);
});

rl.on('close', () => {
  conn.end();
});