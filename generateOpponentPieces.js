// this function will generate the coordinates of all pieces of the enemy board
const { letterMapping, directionMapping, createDirectionCoords } = require('./constants');

const pieceCoords = [];

// create a function that generates the first coord to be used for each piece
const generateRandomCoord = letterMapping => {
  const numCoord = Math.ceil(Math.random() * 10).toString();
  const letterCoordNumber = Math.ceil(Math.random() * 10);
  const letterCoord = letterMapping[letterCoordNumber.toString()];
  return `${letterCoord}${numCoord}`;
};

// create a function that generates the direction of the piece
const generateRandomDirection = directionMapping => {
  const directionNumber = Math.ceil(Math.random() * 4);
  const direction = directionMapping[directionNumber.toString()];
  return direction;
};

const generatePiece = (letterMapping, directionMapping, pieceName, pieceLength) => {
  const firstCoord = generateRandomCoord(letterMapping);
  const direction = generateRandomDirection(directionMapping);

  // generate the rest of the coords, ensuring the piece doesn't go off the board
  if ((direction === 'up' && firstCoord[1] >= 5) || (direction === 'down' && firstCoord[1] <= 6) || (direction === 'left' && firstCoord[0] >= 'E') || (direction === 'right' && firstCoord[0] <= 'F')) {
    const coords = createDirectionCoords[direction](firstCoord, pieceLength - 1, letterMapping);

    pieceCoords[pieceName] = coords;
    return pieceCoords;
  } else { // if the configuration doesn't work, generate again
    return generatePiece(letterMapping, directionMapping, pieceName, pieceLength);
  }
};

console.log(generatePiece(letterMapping, directionMapping, 'carrier', 5));