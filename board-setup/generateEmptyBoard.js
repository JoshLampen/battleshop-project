const generateBoardArray = require('./generateBoardArray');

const generateEmptyBoard = () => {
  const board = generateBoardArray();

  const firstRow = ' ' + board[0].join(' | ') + ' |';
  console.log(firstRow);

  for (let i = 1; i <= 10; i++) {
    const row = board[i].join(' | ') + ' |';
    console.log(row);
  }

};


module.exports = generateEmptyBoard;