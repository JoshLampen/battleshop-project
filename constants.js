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
  up: (firstCoord, newCoords, letterMapping) => {
    const coords = [firstCoord];

    for (let i = 1; i <= newCoords; i++) {
      coords.push([firstCoord[0], firstCoord[1] - i]);
    }

    return coords;
  },

  down: (firstCoord, newCoords, letterMapping) => {
    const coords = [firstCoord];

    for (let i = 1; i <= newCoords; i++) {
      coords.push([firstCoord[0], firstCoord[1] + i]);
    }

    return coords;
  },

  left: (firstCoord, newCoords, letterMapping) => {
    const coords = [firstCoord];

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
      coords.push([newLetter, firstCoord[1]]);
    }

    return coords;
  },

  right: (firstCoord, newCoords, letterMapping) => {
    const coords = [firstCoord];

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
      coords.push([newLetter, firstCoord[1]]);
    }

    return coords;
  }
};

module.exports = { letterMapping, directionMapping, createDirectionCoords };