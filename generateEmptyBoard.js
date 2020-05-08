// this function will generate an array version of an empty board
// when the coordinates of the enemy pieces are randomly generated, they will be mapped to the array
// and converted into a string version of the board

const letterMapping = require('./constants');


const generateEmptyBoard = () => {
  let emptyBoard = [];
  
  // generate first row of letters
  let firstRow = [' '];
  for (const key in letterMapping) {
    firstRow.push(letterMapping[key]);
  }
  emptyBoard.push(firstRow);

  // generate the rest of the rows, each with the row number at the beginning
  for (let i = 1; i <= 10; i++) {
    emptyBoard.push([i, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']);
  }

  return emptyBoard;
};


module.exports = generateEmptyBoard;