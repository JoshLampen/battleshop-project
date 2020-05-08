const { createDirectionCoords } = require('./constants');
const { generateRandomCoord, generateRandomDirection } = require('./randomGenerators');

// this function will generate the coordinates of all pieces of the enemy board

const pieceCoords = {};

const generatePiece = pieceLength => {
  const firstCoord = generateRandomCoord();

  let numCoord; // separate number coord for use in conditionals
  firstCoord.length > 2 ? numCoord = Number(`${firstCoord[1]}${firstCoord[2]}`) : numCoord = Number(firstCoord[1]);

  const direction = generateRandomDirection();

  // generate the rest of the coords, ensuring the piece doesn't go off the board
  if ((direction === 'up' && numCoord >= 5) || (direction === 'down' && numCoord <= 6) || (direction === 'left' && firstCoord[0] >= 'E') || (direction === 'right' && firstCoord[0] <= 'F')) {
    const coords = createDirectionCoords[direction](`${firstCoord[0]}${numCoord}`, pieceLength - 1);

    // check that none of the coords are taken by a different piece
    for (const coord of coords) {
      for (const piece in pieceCoords) {
        if (pieceCoords[piece].includes(coord)) {
          return generatePiece(pieceLength);
        }
      }
    }

    return coords;

  } else { // if the configuration doesn't work, generate again
    return generatePiece(pieceLength);
  }
};

const generatePieces = () => {
  pieceCoords.carrier = generatePiece(5);
  pieceCoords.battleship = generatePiece(4);
  pieceCoords.cruiser = generatePiece(3);
  pieceCoords.submarine = generatePiece(3);
  pieceCoords.destroyer = generatePiece(2);
};

generatePieces();

module.exports = generatePieces;