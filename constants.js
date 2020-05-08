const letterMapping = {
  1: 'A',
  2: 'B',
  3: 'C',
  4: 'D',
  5: 'E',
  6: 'F',
  7: 'G',
  8: 'H',
  9: 'I',
  10: 'J'
};

const directionMapping = {
  1: 'up',
  2: 'down',
  3: 'left',
  4: 'right'
};

const createDirectionCoords = {
  up: (firstCoord, newCoords) => {
    const coords = [firstCoord];

    let numCoord; // separate number coord
    firstCoord.length > 2 ? numCoord = Number(`${firstCoord[1]}${firstCoord[2]}`) : numCoord = Number(firstCoord[1]);

    for (let i = 1; i <= newCoords; i++) {
      const letterCoord = firstCoord[0];
      const newNum = (numCoord - i).toString();
      coords.push(`${letterCoord}${newNum}`);
    }

    return coords;
  },

  down: (firstCoord, newCoords) => {
    const coords = [firstCoord];

    let numCoord; // separate number coord
    firstCoord.length > 2 ? numCoord = Number(`${firstCoord[1]}${firstCoord[2]}`) : numCoord = Number(firstCoord[1]);

    for (let i = 1; i <= newCoords; i++) {
      const letterCoord = firstCoord[0];
      const newNum = (numCoord + i).toString();
      coords.push(`${letterCoord}${newNum}`);
    }

    return coords;
  },

  left: (firstCoord, newCoords) => {
    const coords = [firstCoord];

    let numCoord; // separate number coord
    firstCoord.length > 2 ? numCoord = Number(`${firstCoord[1]}${firstCoord[2]}`) : numCoord = Number(firstCoord[1]);

    // find key of letter coord
    let oldLetterKey;
    for (const key in letterMapping) {
      if (letterMapping[key] === firstCoord[0]) {
        oldLetterKey = Number(key);
      }
    }

    // adjust the letter coord and push to output
    for (let i = 1; i <= newCoords; i++) {
      const newLetterKey = (oldLetterKey - i).toString();
      const newLetter = letterMapping[newLetterKey];
      coords.push(`${newLetter}${numCoord}`);
    }

    return coords;
  },

  right: (firstCoord, newCoords) => {
    const coords = [firstCoord];
    
    let numCoord; // separate number coord
    firstCoord.length > 2 ? numCoord = Number(`${firstCoord[1]}${firstCoord[2]}`) : numCoord = Number(firstCoord[1]);

    // find key of letter coord
    let oldLetterKey;
    for (const key in letterMapping) {
      if (letterMapping[key] === firstCoord[0]) {
        oldLetterKey = Number(key);
      }
    }

    // adjust the letter coord and push to output
    for (let i = 1; i <= newCoords; i++) {
      const newLetterKey = (oldLetterKey + i).toString();
      const newLetter = letterMapping[newLetterKey];
      coords.push(`${newLetter}${numCoord}`);
    }

    return coords;
  }
};

module.exports = { letterMapping, directionMapping, createDirectionCoords };