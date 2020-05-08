// these functions will help generate the opponent's board pieces
const { letterMapping, directionMapping } = require('./constants');

// generates the first coord to be used for each piece
const generateRandomCoord = () => {
  const numCoord = Math.ceil(Math.random() * 10).toString();
  const letterCoordNumber = Math.ceil(Math.random() * 10);
  const letterCoord = letterMapping[letterCoordNumber.toString()];
  return `${letterCoord}${numCoord}`;
};

// generates the direction of the piece
const generateRandomDirection = () => {
  const directionNumber = Math.ceil(Math.random() * 4);
  const direction = directionMapping[directionNumber.toString()];
  return direction;
};

module.exports = { generateRandomCoord, generateRandomDirection };