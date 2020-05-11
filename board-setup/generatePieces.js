const { createDirectionCoords } = require('./constants');
const { generateRandomCoord, generateRandomDirection } = require('./randomGenerators');

// this function will generate the coordinates of all the pieces for the board

const generatePiece = (pieceLength, boardPieces) => {
  const firstCoord = generateRandomCoord();

  let numCoord; // separate number coord for use in conditionals
  firstCoord.length > 2 ? numCoord = Number(`${firstCoord[1]}${firstCoord[2]}`) : numCoord = Number(firstCoord[1]);

  const direction = generateRandomDirection();

  // generate the rest of the coords, ensuring the piece doesn't go off the board
  if ((direction === 'up' && numCoord >= 5) || (direction === 'down' && numCoord <= 6) || (direction === 'left' && firstCoord[0] >= 'E') || (direction === 'right' && firstCoord[0] <= 'F')) {
    const coords = createDirectionCoords[direction](`${firstCoord[0]}${numCoord}`, pieceLength - 1);

    // check that none of the coords are taken by a different piece
    for (const coord of coords) {
      for (const piece in boardPieces) {
        if (boardPieces[piece].includes(coord)) {
          return generatePiece(pieceLength, boardPieces);
        }
      }
    }

    return coords;

  } else { // if the configuration doesn't work, generate again
    return generatePiece(pieceLength, boardPieces);
  }
};

const generatePieces = () => {
  const boardPieces = {};

  boardPieces.carrier = generatePiece(5, boardPieces);
  boardPieces.battleship = generatePiece(4, boardPieces);
  boardPieces.cruiser = generatePiece(3, boardPieces);
  boardPieces.submarine = generatePiece(3, boardPieces);
  boardPieces.destroyer = generatePiece(2, boardPieces);

  return boardPieces;
};


module.exports = generatePieces;