const generateBoardArray = require('./generateBoardArray');
const generatePieces = require('./generatePieces');

// this function populates an empty board with the generated pieces, and converts the board from array to string

const generateBoard = () => {
  const emptyBoard = generateBoardArray();
  const pieces = generatePieces();

  // push the coords of all pieces into a single array
  const pieceCoords = [];
  for (const piece in pieces) {
    for (const coord of pieces[piece]) {
      pieceCoords.push(coord);
    }
  }

  // map the coords onto the board
  for (const coord of pieceCoords) {
    const letterCoord = coord[0];
    let numCoord; // separate number coord for use in conditionals
    coord.length > 2 ? numCoord = Number(`${coord[1]}${coord[2]}`) : numCoord = Number(coord[1]);

    //find the index of the letter and number
    let letterIndex;
    let numIndex;
    for (const letter of emptyBoard[0]) {
      if (letterCoord === letter) {
        letterIndex = emptyBoard[0].indexOf(letter);
      }
    }
    for (const row of emptyBoard) {
      if (numCoord === Number(row[0])) {
        numIndex = emptyBoard.indexOf(row);
      }
    }

    // place coord into appropriate place, represented by a circle
    for (let i = 0; i <= 10; i++) {
      for (let j = 0; j <= 10; j++) {
        emptyBoard[numIndex][letterIndex] = 'O';
      }
    }
  }

  // turn the board into a string
  let board = '';
  const firstRow = ' ' + emptyBoard[0].join(' | ') + ' |\n';
  board += firstRow;

  for (let i = 1; i <= 10; i++) {
    const row = emptyBoard[i].join(' | ') + ' |\n';
    board += row;
  }

  return board;
};

console.log(generateBoard());


module.exports = generateBoard;